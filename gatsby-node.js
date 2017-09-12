const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const productTemplate = path.resolve(`src/templates/product.js`);

  return graphql(`{
    allMarkdownRemark(
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 25)
          html
          id
          frontmatter {
            title
            id
            image
            price
            path
            description
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: productTemplate,
        context: {} // additional data can be passed via context
      });
    });
  });
};
