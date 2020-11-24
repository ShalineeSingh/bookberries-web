module.exports = {
  siteMetadata: {
    title: `Bookberries`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@shalinee`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bookberries`,
        short_name: `Bookberries`,
        start_url: `/`,
        background_color: `#1D3557`,
        theme_color: `#1D3557`,
        display: `minimal-ui`,
        icon: `src/images/logo-bg.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
        key: `gHfd15HTC3FO2qupcx4yvLgT-xs=`,
        center: `Patna, Bihar`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}