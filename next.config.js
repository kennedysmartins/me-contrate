/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: "default", // Escolha o loader que você deseja usar
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  }
  
  module.exports = nextConfig
  