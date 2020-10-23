import React from "react";
import Layout from "../containers/Layout";

function AboutPage() {
  const about = <div>This is the about page</div>;

  return (
    <div>
      <Layout component={about} />
    </div>
  );
}

export default AboutPage;
