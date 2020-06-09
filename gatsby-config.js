module.exports = {
  siteMetadata: {
    title: `Azeite de Dendê`,
    description: `Website do restaurante Azeite de Dendê`,
    author: `@Matheusdoe-dev`,
    keywords:
      'Restaurante , Comida , Baiana, Salvador, Pelourinho, Azeite de Dendê, Bahia, Baiana, Cultura , Acarajé, Muqueca, Peixe, Carurú, Vatapá, Feijoada, Azeite, Sarapaté, Xinxim de Galinha, Feijão Fradinho, Matheus do É',
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
        name: `Azeite de Dendê`,
        short_name: `Azeite de Dendê`,
        start_url: `/`,
        background_color: `#FDD204`,
        theme_color: `#FDD204`,
        display: `minimal-ui`,
        icon: `src/assets/icons/azeite-de-dende.svg`,
      },
    },
  ],
};
