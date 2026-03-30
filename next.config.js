/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Use serverless mode for Cloudflare
  output: "standalone",
};

module.exports = nextConfig;
