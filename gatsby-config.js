module.exports = {
  siteMetadata: {
    title: `Bookberries`,
    description: `READ. RETURN. REPEAT! The bookstore offers your favourite titles, both new and pre-owned copies at very reasonable prices. Grab your copy now to satisfy your inner bookworm.`,
    author: `@shalinee43`,
    siteUrl: 'https://www.bookberries.in/',
    keywords: [
      "Book",
      "Bookshop",
      "Bookstore",
      "books in patna",
      "buy old books",
      "buy books in patna",
      "English novels in Patna",
      "Patna",
      "used books",
      "cheap books",
      "book shop",
      "library in Patna",
      "Bihar bookstore",
      "novels",
      "fiction",
      "literature"
    ],
    classification: ["Bookstore", "Cheap books", "Shop", "Business", "Bookshop"],
    audience: "all",
    robots: "follow,index,noodp,noydir",
    googlebot: "index, follow",
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-SC4FZR2GHB",
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}