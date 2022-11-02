/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
      },
    ],
  },
}

module.exports = nextConfig
// https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579