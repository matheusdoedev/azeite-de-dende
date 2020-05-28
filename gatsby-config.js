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
        name: `Azeite de Dende`,
        short_name: `Azeite de Dende`,
        start_url: `/`,
        background_color: `#FDD204;`,
        theme_color: `#FDD204;`,
        display: `minimal-ui`,
        icon: `src/assets/desktop/icons/facebook.svg`,
      },
    },
  ],
};
