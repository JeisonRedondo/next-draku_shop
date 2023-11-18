/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['tailwindui.com', 'images.unsplash.com', 'i.imgur.com'] },
};

module.exports = nextConfig;
