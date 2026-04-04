import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  generateEtags: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'media.sonos.com',
      },
      {
        protocol: 'https',
        hostname: 'yalehome.com.ar',
      },
      {
        protocol: 'https',
        hostname: 'bondhome.io',
      },
      {
        protocol: 'https',
        hostname: 'static.tp-link.com',
      },
      {
        protocol: 'https',
        hostname: 'www.truaudio.com',
      },
      {
        protocol: 'https',
        hostname: 'www.vssl.com',
      },
      {
        protocol: 'https',
        hostname: 'shelly.cloud',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default withNextIntl(nextConfig);
