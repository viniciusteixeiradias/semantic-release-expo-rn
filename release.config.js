module.exports = {
  verifyConditions: [
    "@semantic-release-expo",
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/npm"
  ],
  prepare: [
    "@semantic-release-expo",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    {
      path: "@semantic-release/git",
      assets: [
        "CHANGELOG.md",
        "package.json",
        "package-lock.json",
        "app.json"
      ]
    }
  ],
  publish: false,
  success: false,
  fail: false
};
