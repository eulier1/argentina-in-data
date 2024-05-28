/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1pnnwteuly8z3.cloudfront.net',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
