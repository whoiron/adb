module.exports = {
  pathPrefix: `/adb`,
  siteMetadata: {
    title: `adb`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.character": `CharacterYaml`,
    "MarkdownRemark.frontmatter.discord": `DiscordYaml`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
