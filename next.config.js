/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Ensures proper file structure for static hosting
  output: "export", // Important for static export
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"],
  },
};

module.exports = nextConfig;
