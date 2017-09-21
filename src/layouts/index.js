import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";

const Header = () => (
  <header className="bg-white black-80 tc pv2 avenir">
    {/* <h1 className="mt2 mb0 tracked-tight avenir fw1 f1">Mobcut</h1> */}
    <h1 className="mt2 mb0 lh-copy pa1 tracked-tight sans-serif fw9">Mobcut</h1>
    <h2 className="mt0 mb0 f6 fw4 ttu tracked">Community commerce</h2>
    <nav className="bt bb tc mw7 center mt3">
      <Link
        to="/"
        className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
      >
        Products
      </Link>
      <Link
        className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
        to="/portfolio"
      >
        Talk
      </Link>
      <Link
        className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
        to="/shop"
      >
        Surveys
      </Link>
      <Link
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        to="/communities"
      >
        Communities
      </Link>
    </nav>
  </header>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Mobcut | Community Commerce"
      meta={[
        { name: "description", content: "Mobcut" },
        { name: "keywords", content: "community, e-commerce, shopping" }
      ]}
    />
    <Header />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
