/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hapus output export karena tidak bisa untuk dynamic route
  // output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
