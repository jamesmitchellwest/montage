module.exports = {
  siteMetadata: {
    title: 'Montage',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
      {
     resolve: `gatsby-plugin-sass`,
     options: {
       precision: 8,
     },
    },
  ],
};
