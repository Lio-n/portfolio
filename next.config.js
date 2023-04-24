/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");
const nextConfig = withSvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  env: {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  },
});

module.exports = nextConfig;
