module.exports = {
  siteMetadata: {
    title: 'Montage',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
    resolve: `gatsby-plugin-sass`,
    options: {
      precision: 8,
    },
  },
  ],
}
