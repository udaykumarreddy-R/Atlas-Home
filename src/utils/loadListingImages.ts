// Eagerly load all images one level under /assets/<unit>/
// Returns: Record<string /*unit*/, string[] /*urls*/>
export function loadListingImages() {
  const modules = import.meta.glob<string>('../assets/*/*.{jpg,JPG,jpeg,JPEG,png,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  });
  const byUnit: Record<string, string[]> = {};
  Object.entries(modules).forEach(([path, url]) => {
    // path like "../assets/501/IMG_1.jpg"
    const match = path.match(/assets\/([^/]+)\//);
    const unit = match?.[1];
    if (!unit) return;
    (byUnit[unit] ||= []).push(url);
  });
  // stable order by filename
  Object.values(byUnit).forEach(arr => arr.sort());
  return byUnit;
}
