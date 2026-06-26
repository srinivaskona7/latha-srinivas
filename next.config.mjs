import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

// Detect if we are building in GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
// Change this to your repository name if hosting on srinivaskona7.github.io/<repo-name>
// Set to empty string if using a Custom Domain on GitHub Pages
const repoName = "latha-srinivas";
const basePath = isGithubActions ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  trailingSlash: true,
  basePath,
  env: {
    // Exposed to client/layout so manifest + icon links can include the base path.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default withPWA(nextConfig);

