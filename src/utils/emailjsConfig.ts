const trimmed = (value?: string) => value?.trim();

const rawConfig = {
  serviceId: trimmed(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  templateId: trimmed(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  publicKey: trimmed(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  ownerEmail: trimmed(import.meta.env.VITE_OWNER_EMAIL),
};

const requiredEnvKeys: Record<string, string | undefined> = {
  VITE_EMAILJS_SERVICE_ID: rawConfig.serviceId,
  VITE_EMAILJS_TEMPLATE_ID: rawConfig.templateId,
  VITE_EMAILJS_PUBLIC_KEY: rawConfig.publicKey,
  VITE_OWNER_EMAIL: rawConfig.ownerEmail,
};

export const emailJsConfig = rawConfig;

export const getMissingEmailJsEnvKeys = () =>
  Object.entries(requiredEnvKeys)
    .filter(([, value]) => !value)
    .map(([key]) => key);

export const isEmailJsConfigured = () => getMissingEmailJsEnvKeys().length === 0;
