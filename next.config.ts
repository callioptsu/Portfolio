import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    GITHUB_USER: process.env.GITHUB_USER,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
}

export default nextConfig
