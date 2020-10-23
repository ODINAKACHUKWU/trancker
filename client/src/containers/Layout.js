import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ component }) {
  return (
    <div>
      <NavBar />
      {component}
      <Footer />
    </div>
  );
}

export default Layout;
