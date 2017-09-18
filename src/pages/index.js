import React from "react";
import Link from "gatsby-link";

export default function Index({ data }) {
  const { edges: products } = data.allMarkdownRemark;
  return (
    <main className="flex mw7 center justify-between">
      {products
        .filter(product => product.node.frontmatter.title.length > 0)
        .map(({ node: product }) => {
          return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw7 flex-auto">
              <Link to={product.frontmatter.path} className="db link dim tc">
                <img
                  key={
                    product.frontmatter.thumbnail.childImageSharp
                      .responsiveSizes.src
                  }
                  src={
                    product.frontmatter.thumbnail.childImageSharp
                      .responsiveSizes.src
                  }
                  srcSet={
                    product.frontmatter.thumbnail.childImageSharp
                      .responsiveSizes.srcSet
                  }
                  sizes={
                    product.frontmatter.thumbnail.childImageSharp
                      .responsiveSizes.sizes
                  }
                  width="100%"
                  className="db w-100 br2 br--top"
                  alt={product.frontmatter.title}
                />
                <div className="pa2 ph3-ns pb3-ns">
                  <div className="dt w-100 mt1">
                    <div className="dtc">
                      <h1 className="f5 f4-ns mv0">
                        {product.frontmatter.title}
                      </h1>
                    </div>
                    <div className="dtc tr">
                      <h2 className="f5 mv0">
                        {`RM` +
                          product.frontmatter.price.toString().slice(0, -2) +
                          "." +
                          product.frontmatter.price.toString().slice(-2)}
                      </h2>
                    </div>
                  </div>
                  <p className="f6 lh-copy measure mt2 mid-gray">
                    {product.excerpt}
                  </p>
                </div>
              </Link>
            </article>
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
                responsiveSizes {
                  src
                  srcSet
                  sizes
                  base64
                  aspectRatio
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
