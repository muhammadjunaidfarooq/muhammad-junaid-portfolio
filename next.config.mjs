/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure trailing slashes for consistency
  trailingSlash: false,

  // Image configuration
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      }
    ],
  },

  // Ensure proper environment variable handling
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NODE_ENV === 'production' ? 'https://muhammadjunaidfarooq.vercel.app' : 'http://localhost:3000'
  },

  // Configure headers for proper asset serving.
  // Only content-hashed build output is safe to cache forever — HTML pages
  // and API routes must stay revalidatable or visitors get stuck on stale
  // content after every future deploy. Applied in production only: dev-mode
  // chunk filenames aren't content-hashed and get reused across restarts, so
  // an immutable cache here would make the browser hold onto a stale bundle
  // (causing hydration mismatches) even after the source changes.
  async headers() {
    if (process.env.NODE_ENV !== 'production') {
      return [];
    }

    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;