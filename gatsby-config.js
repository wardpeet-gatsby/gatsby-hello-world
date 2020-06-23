/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-route-dictionary",
    "gatsby-disable-prefetch",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        reportFilename: "_bundle.html",
        openAnalyzer: false,
      },
    },
  ],
}
