/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   remotePatterns: [ 
     { protocol: 'https', 
                    hostname: 'res.cloudinary.com', port: '', pathname: '/**', // Allows all sub-directories and images }, ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
