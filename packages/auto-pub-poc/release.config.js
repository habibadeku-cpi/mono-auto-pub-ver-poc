module.exports = {
    tagFormat: 'libv1_${version}',
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
          assets: ['CHANGELOG.md', 'dist/**'],
          // eslint-disable-next-line no-template-curly-in-string
          message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }
      ]
    ],
  }