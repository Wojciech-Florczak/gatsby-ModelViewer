module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `models`,
        path: `${__dirname}/src/content/models`,
      },
    },
  ],
};
