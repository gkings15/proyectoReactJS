import React from "react";
import "./Footer.styles.scss";

const Footer = () => (
  <footer className="text-center">
    {" "}
    {new Date().getFullYear()} - &copy; Gustavo Reyes A.
  </footer>
);

Footer.displayName = "Footer";

export default Footer;
