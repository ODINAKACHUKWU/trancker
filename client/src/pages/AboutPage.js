import React from "react";
import Layout from "../containers/Layout";

function AboutPage() {
  const about = (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  );

  return <Layout component={about} />;
}

export default AboutPage;
