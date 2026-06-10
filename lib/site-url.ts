export const DEFAULT_SITE_URL = "https://pixelzipkit.com";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_SITE_URL;

  try {
    const url = new URL(configuredUrl);

    if (url.hostname.endsWith("zucca100.com")) {
      return DEFAULT_SITE_URL;
    }

    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getSiteHost() {
  return new URL(getSiteUrl()).host;
}
