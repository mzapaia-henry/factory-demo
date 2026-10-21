import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep `next dev` from writing an AGENTS.md into the repo.
  agentRules: false,
};

export default nextConfig;
