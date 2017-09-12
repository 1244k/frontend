import React from "react";
import Helmet from "react-helmet";

// import '../css/product.css'; // make it pretty!

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: product } = data; // data.markdownRemark holds our product data
  return (
    <div className="blog-post-container">
      <Helmet title={`${product.frontmatter.title}`} />
      <div className="blog-post">
        <h1>
          {product.frontmatter.title}
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
        image
        price
        path
        description
      }
    }
  }
`;