import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    GITHUB_USER: process.env.GITHUB_USER,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

export default nextConfig
