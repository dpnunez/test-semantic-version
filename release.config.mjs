/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    { name: "future-main" },
    {
      name: "alpha",
      prerelease: "alpha",
    },
  ],
  plugins: [
    "@semantic-release/commit-analyzer", // Analyze commits
    "@semantic-release/release-notes-generator", // Generate release notes
    "@semantic-release/github", // Publish GitHub releases
  ],
  preset: "angular", // Conventional Commit standard
};
