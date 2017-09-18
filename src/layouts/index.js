import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import ProductIcon from "react-icons/lib/ti/home-outline";
import CategoryIcon from "react-icons/lib/ti/book";
import SurveyIcon from "react-icons/lib/ti/th-large-outline";
import AboutIcon from "react-icons/lib/ti/info-large-outline";
import SearchIcon from "react-icons/lib/ti/zoom-outline";
import "./index.css";

const Header = () => (
  // <header classNameNameName="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
  //   <nav classNameNameName="f6 fw6 ttu tracked">
  // <Link to="/" classNameNameName="link dim white dib mr3">
  //   Mobcut
  // </Link>
  // <Link to="/" classNameNameName="link dim white dib mr3">
  //   Products
  // </Link>

  //     <a classNameNameName="link dim white dib mr3" href="#" title="Talk">
  //       Talk
  //     </a>
  //     <a classNameNameName="link dim white dib mr3" href="#" title="Surveys">
  //       Surveys
  //     </a>
  //     <a classNameNameName="link dim white dib" href="#" title="About">
  //       About
  //     </a>
  //   </nav>
  // </header>

  // <nav classNameName="pa3 pa4-ns">
  //   <a
  //     classNameName="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
  //     href="#"
  //     title="Home"
  //   >
  //     Mobcut
  //   </a>
  //   <div classNameName="tc pb3">
  //     <Link to="/" classNameName="link dim gray f6 f5-ns dib mr3">
  //       Store
  //     </Link>
  //     <a classNameName="link dim gray f6 f5-ns dib mr3" href="#" title="About">
  //       Talk
  //     </a>
  //     <a classNameName="link dim gray f6 f5-ns dib mr3" href="#" title="Store">
  //       Surveys
  //     </a>
  //     <a classNameName="link dim gray f6 f5-ns dib" href="#" title="about">
  //       About
  //     </a>
  //   </div>
  // </nav>

  <header className="bg-white black-80 tc pv4 avenir">
    <h1 className="mt2 mb0 georgia i fw1 f1">Mobcut</h1>
    <h2 className="mt2 mb0 f6 fw4 ttu tracked">Community-driven e-commerce</h2>
    <nav className="bt bb tc mw7 center mt4">
      <Link
        to="/"
        className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
      >
        Store
      </Link>
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
        href="/portfolio"
      >
        Talk
      </a>
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
        href="/shop"
      >
        Surveys
      </a>
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
        href="/about"
      >
        About
      </a>
      <a
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        href="/contact"
      >
        Contact
      </a>
    </nav>
  </header>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Mobcut | Mob-driven e-commerce"
      meta={[
        { name: "description", content: "Mobcut" },
        { name: "keywords", content: "community, e-commerce, shop" }
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
