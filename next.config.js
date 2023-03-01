/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["images.ctfassets.net"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
