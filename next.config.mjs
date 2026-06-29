/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces fully pre-rendered, crawlable HTML (great SEO),
  // deployable on any static host, matching the original static site.
  output: 'export',
  trailingSlash: true,
  images: {
    // next/image optimization is unavailable with `output: export`.
    unoptimized: true,
  },
};

export default nextConfig;
