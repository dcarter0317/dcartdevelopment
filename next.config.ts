import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  // Stable build ID keeps _next/static/<id> constant so the FTP deploy never has
  // to delete a directory (Hostinger's FTP server errors on that). Chunk files
  // are content-hashed, so caching is unaffected.
  generateBuildId: async () => "static",
  images: { unoptimized: true },
};

export default nextConfig;
