import React from "react";
import Helmet from "react-helmet";

// import "../css/app.css"; // make it pretty!

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: product } = data; // data.markdownRemark holds our product data
  return (
    <div className="flex mw7 center avenir">
      <Helmet title={`${product.frontmatter.title}`} />
      <div className="blog-post">
        <h1>
          {product.frontmatter.title}{" "}
          <div className="f6 fr grow no-underline br-pill ph3 pv2 mb0 dib white bg-hot-pink">
            Buy for{" "}
            {`RM` +
              product.frontmatter.price.toString().slice(0, -2) +
              "." +
              product.frontmatter.price.toString().slice(-2)}
          </div>
        </h1>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: product.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ProductByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
        description
      }
    }
  }
`;
