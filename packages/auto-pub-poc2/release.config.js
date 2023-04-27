module.exports = {
  tagFormat: 'libv2_${version}',
  packages: ["packages/auto-pub-poc2/*"],
  branches: [
    'main',
    {
      name: 'beta',
      prerelease: true
    }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    {
      "extends": "semantic-release-monorepo"
    },
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['packages/auto-pub-poc2/CHANGELOG.md', 'packages/auto-pub-poc2/dist/**'],
        // eslint-disable-next-line no-template-curly-in-string
        message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ],
}