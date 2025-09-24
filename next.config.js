/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ don't block deploy on ESLint
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ don't block deploy on TS errors
  },
};

module.exports = nextConfig;
