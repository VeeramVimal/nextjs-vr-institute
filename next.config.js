/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
          config.resolve.fallback.tls = false;
          config.resolve.fallback.net = false;
          config.resolve.fallback.child_process = false;
        }
    
        return config;
      },
}

module.exports = nextConfig
