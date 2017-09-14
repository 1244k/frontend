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
  <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
    <nav className="f6 fw6 ttu tracked">
      <a className="link dim white dib mr3" href="#" title="Products">
        Products
      </a>
      <a className="link dim white dib mr3" href="#" title="Talk">
        Talk
      </a>
      <a className="link dim white dib mr3" href="#" title="Surveys">
        Surveys
      </a>
      <a className="link dim white dib" href="#" title="About">
        About
      </a>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="pa4 pa5-l black-70 bt b--black-10">
    <small className="f6 db tc">
      © 2017 <b className="ttu">Moredrop Commerce</b>, All Rights Reserved
    </small>
    <div className="tc mt3">
      <a
        href="/language/"
        title="Language"
        className="f6 dib ph2 link mid-gray dim"
      >
        Language
      </a>
      <a href="/terms/" title="Terms" className="f6 dib ph2 link mid-gray dim">
        Terms of Use
      </a>
      <a
        href="/privacy/"
        title="Privacy"
        className="f6 dib ph2 link mid-gray dim"
      >
        Privacy
      </a>
    </div>
  </footer>
);

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column"
    }}
  >
    <Helmet
      title="Mobcut | Mob-driven e-commerce"
      meta={[
        { name: "description", content: "Mobcut" },
        { name: "keywords", content: "community, e-commerce, shop" }
      ]}
    />
    <Header />
    <section>{children()}</section>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
