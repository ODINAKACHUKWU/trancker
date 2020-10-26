import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ component }) {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <NavBar />
        <div className="container mt-5 pt-5">{component}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
