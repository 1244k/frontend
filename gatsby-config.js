module.exports = {
  siteMetadata: {
    title: `Mobcut's frontend`
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    }
  ]
};
