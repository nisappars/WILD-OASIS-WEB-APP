/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dclaevazetcjjkrzczpc.supabase.co", // Your original Supabase bucket
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
      {
        protocol: "https",
        hostname: "ccaxhbiskkvpcmeerfbi.supabase.co", // Add this line for the new hostname
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**", // Adjust the path as necessary
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.pexels.com", // Pexels
        port: "",
        pathname: "/**",
      },
    ],
  },
  // output: "export", // Uncomment if you need static export
};

export default nextConfig;
