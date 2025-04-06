/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/stephanegerbouin',
  assetPrefix: '/stephanegerbouin',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
