import type { NextConfig } from "next";
import withLess from "next-with-less";
import type { Configuration as WebpackConfig } from 'webpack';

const nextConfig: NextConfig = withLess({
    reactStrictMode: false,
    webpack: (config: WebpackConfig) => {
        // config.infrastructureLogging = { debug: /PackFileCache/ }
        config.module?.rules?.push({});
        return config;
    },
    cssLoaderOptions: {
        modules: {
            auto: (resourcePath: string) => resourcePath.endsWith('.module.less'),
            localIdentName: '[local]__[hash:base64:5]',
        },
    },
    lessLoaderOptions: {
        lessOptions: {
            javascriptEnabled: true,
        },
    },
});

export default nextConfig;