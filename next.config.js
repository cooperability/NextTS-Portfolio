/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
};

module.exports = nextConfig;
