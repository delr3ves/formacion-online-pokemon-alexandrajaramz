import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="app__footer">
      <p className="footer-text">
        Developed by{" "}
        <a
          className="footer-github"
          href="https://github.com/alexandrajaramz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alexandra Jara
        </a>{" "}
        &copy; 2019
      </p>
    </footer>
  );
};

export default Footer;
