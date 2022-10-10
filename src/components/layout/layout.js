import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <div className="header-container" >
        <Header />
      </div>
        <div className="main-content">
            {children || ""}
        </div>
      <div className="footer-container" >
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
