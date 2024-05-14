/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    "tailwindcss": {},
    "autoprefixer": {},
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
