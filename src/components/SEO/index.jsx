import React from "react";
import Helmet from "react-helmet";

const SEO = () => {
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`Art Elshani`}
      meta={[{ name: `description`, content: "Art Elshani Personal Website" }]}
    ></Helmet>
  );
};

export default SEO;
