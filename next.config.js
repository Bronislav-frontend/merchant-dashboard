/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.freepik.com"],
  },
  env: {
    API_URL: process.env.API_URL,
  },
  swcMinify: true,
};

module.exports = nextConfig;
