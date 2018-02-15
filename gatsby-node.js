const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require(`limax`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if (node.internal.type === `CharacterYaml`) {
    const slug = `/characters/${slugify(node.id)}/`;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  } else if (node.internal.type === `DiscordYaml`) {
    // add slug
    if (!!node.character) {
      const slug = `/characters/${slugify(node.character)}/`;
      createNodeField({
        node,
        name: `character___slug`,
        value: slug,
      })
    }
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const {createPage} = boundActionCreators;
  return new Promise((resolve, reject) => {
    const pages = [];
    const characterPage = path.resolve(`src/templates/character-post.js`);

    graphql(`
    {
      allCharacterYaml {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors);
        console.log(result);
        reject(result.errors);
      }

      // Create from character
      result.data.allCharacterYaml.edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: characterPage,
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      });
      resolve();
    })
  })
};