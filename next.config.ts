import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/todo-claude-next',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
