/** @type {import('next').NextConfig} */

// Get package version from package.json
const { version } = require("./package.json");

// Function to get git commit hash
const getGitCommitHash = () => {
  try {
    const { execSync } = require("child_process");
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch (e) {
    return "unknown";
  }
};

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
    NEXT_PUBLIC_COMMIT_HASH: getGitCommitHash(),
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV || "development",
    NEXT_PUBLIC_SHOW_TEAM_INFO:
      process.env.NEXT_PUBLIC_SHOW_TEAM_INFO || "false",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
