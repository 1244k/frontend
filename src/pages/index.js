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
            <div className="fl w-50 w-third-m w-25-ns">
              <div className="aspect-ratio aspect-ratio--6x4">
                <Link to={product.frontmatter.path}>
                  <img
                    style={{
                      backgroundImage: `url(${__PATH_PREFIX__ +
                        product.frontmatter.image})`
                    }}
                    className="db bg-center cover aspect-ratio--object"
                  />
                  {product.frontmatter.title}
                </Link>
              </div>
            </div>
          );
        })}
    </main>
    // <main className="cf w-100">
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    // <img
    //   style={{
    //     backgroundImage: "url(http://mrmrs.github.io/images/0006.jpg)"
    //   }}
    //   className="db bg-center cover aspect-ratio--object"
    // />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0002.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0003.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0004.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0007.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0008.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0009.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0010.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0011.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0012.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0013.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       ``
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0014.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0015.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0016.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0017.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0018.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0019.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0020.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0021.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    //   <div className="fl w-50 w-third-m w-25-ns">
    //     <div className="aspect-ratio aspect-ratio--6x4">
    //       <img
    //         style={{
    //           backgroundImage: "url(http://mrmrs.github.io/images/0022.jpg)"
    //         }}
    //         className="db bg-center cover aspect-ratio--object"
    //       />
    //     </div>
    //   </div>
    // </main>
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
            image
            price
            path
          }
        }
      }
    }
  }
`;
