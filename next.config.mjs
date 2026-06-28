// Detect if we are building in GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
// Repository name for GitHub Pages project sites: srinivaskona7.github.io/<repo>
// Set to "" if you move to a custom domain or a user/org root site.
const repoName = "latha-srinivas";
const basePath = isGithubActions ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  trailingSlash: true,
  basePath,
  // Don't fail the production build / CI deploy on lint.
  eslint: { ignoreDuringBuilds: true },
  env: {
    // Exposed to the client so manifest + icon links can include the base path.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
