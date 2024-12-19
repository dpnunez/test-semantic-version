/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    { name: "main" },
    {
      name: "alpha",
      prerelease: "alpha",
    },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
