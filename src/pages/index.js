import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to Mobcut.</p>
    <p>Now go buy something awesome.</p>
    <Link to="/about/">About</Link>
  </div>
);

export default IndexPage;
