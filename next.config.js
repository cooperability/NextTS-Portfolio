const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/skills',
        destination: '/demos',
        permanent: true,
      },
      {
        source: '/prompts',
        destination: '/resources',
        permanent: true,
      },
    ]
  },
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withPWA(
  withBundleAnalyzer(
    withMDX({
      ...nextConfig,
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    })
  )
)
