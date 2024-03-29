module.exports = {
  siteMetadata: {
    title: 'Montage',
    description: 'Montage brings the party.',
    author: 'Jim West and Daniel Domann',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'montage-band-site',
        short_name: 'montage',
        start_url: '/',
        background_color: '#005369',
        theme_color: '#005369',
        display: 'minimal-ui',
        icon: 'src/assets/img/montagefavicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-64249844-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
      'gatsby-plugin-offline',
  ],
}
