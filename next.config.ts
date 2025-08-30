import type { NextConfig } from 'next';
import withAntdLess from 'next-plugin-antd-less';
import withLess from 'next-with-less';

const nextConfig: NextConfig = withAntdLess(
  withLess({
    reactStrictMode: false,
    webpack: (config: NextConfig) => {
      // config.infrastructureLogging = { debug: /PackFileCache/ }
      config.module?.rules?.push({});
      return config;
    },
    images: {
      domains: ['images.unsplash.com'],
    },
      eslint: {
          ignoreDuringBuilds: true,
      },
  })
);

export default nextConfig;
