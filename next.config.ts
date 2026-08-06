import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // Allows the dev server (incl. the HMR websocket) to be reached over
  // Tailscale, since Next.js blocks cross-origin dev requests by default.
  allowedDevOrigins: ["100.92.10.40"],
};

export default nextConfig;
