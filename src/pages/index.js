import React from "react";
import Link from "gatsby-link";

export default function Index({ data }) {
  const { edges: products } = data.allMarkdownRemark;
  return (
    <main className="cf w-100">
      {products
        .filter(product => product.node.frontmatter.title.length > 0)
        .map(({ node: product }) => {
          return (
            <div className="fl w-50 w-25-m w-20-l pa2">
              <Link to={product.frontmatter.path} className="db link dim tc">
                <img
                  src={
                    product.frontmatter.thumbnail.childImageSharp
                      .responsiveSizes.src
                  }
                  width="100%"
                  data-src={
                    product.frontmatter.thumbnail.childImageSharp
                      .responsiveSizes.src
                  }
                  data-srcset={
                    product.frontmatter.thumbnail.childImageSharp
                      .responsiveSizes.srcSet
                  }
                  data-sizes={
                    product.frontmatter.thumbnail.childImageSharp
                      .responsiveSizes.sizes
                  }
                  className="w-100 db outline black-10 lazyload"
                  alt={product.frontmatter.title}
                />
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">{product.frontmatter.title}</dt>
                  <dd className="ml0 black truncate w-100">
                    {product.frontmatter.title}
                  </dd>
                  <dt className="clip">Artist</dt>
                  <dd className="ml0 gray truncate w-100">
                    {product.frontmatter.price}
                  </dd>
                </dl>
              </Link>
            </div>
          );
        })}
    </main>
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
            id
            thumbnail {
              childImageSharp {
                responsiveSizes(maxWidth: 400) {
                  src
                  srcSet
                  sizes
                  base64
                }
              }
            }
            price
            path
          }
        }
      }
    }
  }
`;
