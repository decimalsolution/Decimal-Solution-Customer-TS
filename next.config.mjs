/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "firebasestorage.googleapis.com",
        protocol: "https",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
