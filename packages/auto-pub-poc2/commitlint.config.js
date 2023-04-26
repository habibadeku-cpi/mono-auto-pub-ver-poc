
module.exports = {
    extends: ['@commitlint/config-conventional'],
    // ignore for body-max-line-length when semantic release is setting package release version
    ignores: [(message) => message.includes('chore(release): set `package.json`')]
}