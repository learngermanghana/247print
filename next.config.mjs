const nextConfig = {
  images: {
    // Keep generated image variants cached longer and limit the number of
    // responsive widths Vercel may create for the same source image.
    minimumCacheTTL: 60 * 60 * 24,
    deviceSizes: [640, 750, 1080, 1200, 1920],
    imageSizes: [32, 64, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
