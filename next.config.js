const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})
module.exports = withNextra({
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/interview",
        statusCode: 301
      },
      {
        source: "/index",
        destination: "/interview",
        statusCode: 301
      }
    ]
  }
})
