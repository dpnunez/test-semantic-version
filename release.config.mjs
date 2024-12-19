/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    { name: "main" }, // Stable releases
    { name: "alpha", channel: "alpha", prerelease: "alpha" }, // Development pre-releases
  ],
  plugins: [
    "@semantic-release/commit-analyzer", // Analyze commits
    "@semantic-release/release-notes-generator", // Generate release notes
    "@semantic-release/github", // Publish GitHub releases
  ],
  preset: "angular", // Conventional Commit standard
  releaseRules: [
    { type: "breaking", release: "minor" }, // Treat breaking changes as minor in 0.x.y
    { type: "feat", release: "patch" }, // Treat features as patch in 0.x.y
  ],
};
