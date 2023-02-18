/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ],
  },
  sassOptions: {
    additionalData: `@import "src/scss/variables.scss"; @import "src/scss/mixins.scss";`,
  },
}

module.exports = nextConfig
