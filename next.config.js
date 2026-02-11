/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Settings for GitHub Pages when serving from a repository page
  // update the basePath/assetPrefix to match your repo name
  basePath: '/own-portfolio',
  assetPrefix: '/own-portfolio/',
  // ensure exported pages are written as directories with index.html
  trailingSlash: true,
}

module.exports = nextConfig
