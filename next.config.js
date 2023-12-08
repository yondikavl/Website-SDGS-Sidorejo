/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
