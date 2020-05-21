module.exports = {
  siteMetadata: {
    title: `Azeite de Dênde`,
    description: `Website do restaurante Azeite de Dênde`,
    author: `@Matheusdoe-dev`,
    keywords:
      'Restaurante , Comida Baiana, Salvador, Pelourinho, Azeite de Dende',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imgs`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/desktop/icons/facebook.svg`,
      },
    },
  ],
};
