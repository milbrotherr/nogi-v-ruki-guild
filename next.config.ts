import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: 'export',
        assetPrefix: '/nogi-v-ruki-guild',
      }
    : {}),
};

export default nextConfig;
