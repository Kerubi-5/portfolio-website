/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
