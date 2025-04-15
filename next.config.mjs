/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/:path*', // Match all routes
        headers: [
          {key: 'Cache-Control', value: 'no-store, no-cache'},
          {key: 'Pragma', value: 'no-cache'},
          {key: 'Expires', value: '0'},
          {key: 'Surrogate-Control', value: 'no-store'},
        ],
      },
    ];
  },
};

export default nextConfig;
