import React from "react";
import Link from "gatsby-link";

const AboutPage = () =>
  <div>
    <h1>Hello people</h1>
    <p>
      <b>Mobcut</b> provides great products at below-retail prices. We do it by{" "}
      <i>
        <b>cutting</b>
      </i>{" "}
      the prices down as low as possible by leveraging the power of the{" "}
      <i>
        <b>mob</b>
      </i>{" "}
      &#9786;.
    </p>
    <p>
      No, not the mafia --- the{" "}
      <b>
        <i>crowd</i>
      </b>{" "}
      to be precise.
    </p>
    <p>How?</p>
    <p>
      <i>First</i>, we need to identify the demand. One of the approach is to
      scoure the internet to find on-demand products from enthusiasts ranging
      from Audiophiles to Fishing.
    </p>
    <p>
      <i>Second</i>, we collect surveys that our community has created based on
      the category they are interested in for products that they want.
    </p>
    <p>
      Once we see there is a good enough demand for a product, we will start to
      approach <b>manufacturers and distributors</b> to source those selected
      products at below-retail price.
    </p>
    <p>Simple, right? So let's start with those surveys &#9889;</p>
    <Link to="/">Home</Link>
  </div>;

export default AboutPage;
