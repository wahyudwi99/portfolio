import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ?  '/https://wahyudwi99.github.io/portfolio/' : '',
  assetPrefix: isProd ? '/https://wahyudwi99.github.io/portfolio/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
