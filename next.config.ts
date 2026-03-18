import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow all image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Ensure compatibility with Netlify plugin
  output: undefined, // Let @netlify/plugin-nextjs handle the output
}

export default nextConfig
