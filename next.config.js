const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,
  // Configure for GitHub Pages subdirectory
  basePath: isProd ? '/wnrs' : '',
  assetPrefix: isProd ? '/wnrs/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  pwa: { disable: true }  // Disable PWA for now
})
