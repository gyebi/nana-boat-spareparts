const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const siteName = "Nana Boateng Auto Parts";

export const baseMetadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: `${siteName} | IS ME Enterprise`, template: `%s | ${siteName}` },
  description: "Sample automobile spare-parts catalogue for customers in Abossey Okai, Ghana.",
};

export function pageMetadata({ title, description, path }) {
  const url = siteUrl && path ? `${siteUrl}${path}` : undefined;
  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url }, openGraph: { title, description, url, siteName, type: "website" } } : {}),
  };
}

export { siteName, siteUrl };
