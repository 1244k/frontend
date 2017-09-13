import React from "react";
import Link from "gatsby-link";

export default function Index({ data }) {
  const { edges: products } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {products
        .filter(product => product.node.frontmatter.title.length > 0)
        .map(({ node: product }) => {
          return (
            <div className="blog-post-preview" key={product.id}>
              <h1>
                <Link to={product.frontmatter.path}>
                  {product.frontmatter.title}
                </Link>
              </h1>
              <p>
                {product.excerpt}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
