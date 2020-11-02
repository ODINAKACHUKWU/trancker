import React, { Fragment } from "react";
import Layout from "../containers/Layout";

function AboutPage() {
  const about = (
    <Fragment>
      <h1>About</h1>
      <p>This is the about page</p>
    </Fragment>
  );

  return <Layout component={about} />;
}

export default AboutPage;
