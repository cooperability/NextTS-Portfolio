/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  ...nextConfig,
})
