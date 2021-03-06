/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {
  Helmet
} from "react-helmet"
import {
  useStaticQuery,
  graphql
} from "gatsby"
import defaultOpenGraphImage from '../images/book_bag.png'

function SEO({
  description,
  lang,
  meta,
  title
}) {
  const {
    site
  } = useStaticQuery(
    graphql `
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            classification
            audience
            robots
            googlebot
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const ogImageUrl = site.siteMetadata.siteUrl + defaultOpenGraphImage

  return ( <
    Helmet htmlAttributes = {
      {
        lang,
      }
    }
    title = {
      title
    }
    titleTemplate = {
      `%s | ${site.siteMetadata.title}`
    }
    meta = {
      [{
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          name: "classification",
          content: site.siteMetadata.classification.join(","),
        },
        {
          name: "audience",
          content: site.siteMetadata.audience,
        },
        {
          name: "robots",
          content: site.siteMetadata.robots,
        },
        {
          name: "googlebot",
          content: site.siteMetadata.googlebot,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImageUrl,
        },
        {
          property: `twitter:image`,
          content: ogImageUrl,
        },
        {
          property: `image`,
          content: ogImageUrl,
          itemprop: "image"
        },
        {
          property: `og:image:width`,
          content: 300
        },
        {
          property: `og:image:height`,
          content: 300
        },
        {
          property: `og:image:secure_url`,
          content: ogImageUrl,
        },
        {
          property: `og:image:url`,
          content: ogImageUrl,
        },
        {
          property: `og:image:secure`,
          content: ogImageUrl,
        },
        {
          property: `og:image:alt`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
      ].concat(meta)
    }
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO