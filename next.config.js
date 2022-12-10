/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.google.com",
      "images.unsplash.com",
      "images-workbench.99static.com",
      "upload.wikimedia.org",
      "images.unsplash.com",
      "ramen-api.dev",
    ],
  },
};

module.exports = nextConfig;
