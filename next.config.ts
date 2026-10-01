import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/thores",
  assetPrefix: "/thores/",
  images: { unoptimized: true },
  turbopack: { root: path.resolve(process.cwd()) },
};

export default nextConfig;

