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
  <div
    style={{
      background: "navy",
      marginBottom: "0.45rem"
    }}
  >
    <div
      style={{
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Mobcut
        </Link>
      </h1>
    </div>
  </div>
);

const Footer = () => (
  <div
    style={{
      background: "black",
      flex: "1 0 auto"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          <ProductIcon />
        </Link>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          <SearchIcon />
        </Link>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        />
        <Link
          to="/categories"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          <CategoryIcon />
        </Link>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          <SurveyIcon />
        </Link>
        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          <AboutIcon />
        </Link>
      </h1>
    </div>
  </div>
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
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
        flex: "1 0 auto"
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
