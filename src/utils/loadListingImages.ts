import manifest from '../assets/optimized-manifest.json';

type ListingImageMap = Record<string, string[]>;

const optimizedModules = import.meta.glob('../assets/*/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const originalModules = import.meta.glob('../assets/*/*.{jpg,JPG,jpeg,JPEG,png,PNG}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function extractUnit(path: string) {
  const match = path.match(/\.\.\/assets\/([^/]+)\//);
  return match?.[1];
}

function manifestKeyFromPath(path: string) {
  const match = path.match(/\.\.\/assets\/(.+)$/);
  return match?.[1];
}

function baseNameFromKey(key: string) {
  const filename = key.split('/').pop() ?? key;
  return filename.replace(/\.[^.]+$/, '').replace(/\.[0-9a-f]{8}$/i, '');
}

export function loadListingImages(): ListingImageMap {
  const byUnit = new Map<string, Map<string, string>>();

  Object.entries(originalModules).forEach(([path, url]) => {
    const unit = extractUnit(path);
    if (!unit) return;

    const manifestKey = manifestKeyFromPath(path);
    const baseKey = manifestKey ? baseNameFromKey(manifestKey) : path;

    const optimizedRelative = manifestKey ? manifest[manifestKey] : undefined;
    const optimizedModuleKey = optimizedRelative ? `../assets/${optimizedRelative}` : undefined;

    const optimizedUrl = optimizedModuleKey
      ? optimizedModules[optimizedModuleKey]
      : undefined;

    const imageUrl = optimizedUrl ?? url;

    const unitBucket = byUnit.get(unit) ?? new Map<string, string>();

    if (!unitBucket.has(baseKey) || optimizedUrl) {
      unitBucket.set(baseKey, imageUrl);
    }

    byUnit.set(unit, unitBucket);
  });

  const result: ListingImageMap = {};
  byUnit.forEach((images, unit) => {
    const ordered = Array.from(images.entries())
      .sort(([a], [b]) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
      )
      .map(([, value]) => value);

    result[unit] = ordered;
  });

  return result;
}
