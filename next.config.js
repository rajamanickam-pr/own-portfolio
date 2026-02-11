/** @type {import('next').NextConfig} */
// Use an environment variable to control basePath so local dev isn't affected.
const repoBase = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || ''
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath and assetPrefix are optional — set BASE_PATH when deploying to GitHub Pages
  basePath: repoBase || '',
  assetPrefix: repoBase ? `${repoBase}/` : '',
  // ensure exported pages are written as directories with index.html
  trailingSlash: true,
}

module.exports = nextConfig
