import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="Footer" id="footer">
        <div style={{ textAlign: "center" }}>
          <img
            src="images/logo.png"
            width={"80px"}
            height={"60px"}
            alt="Footer Logo"
          />
        </div>
        <hr />
        <div className="bottomFooter d-flex flex-row flex-wrap justify-content-between align-items-center">
          <p>Copyright © 2021. All rights reserved.</p>
          <div className="social">
            <a
              href="https://www.facebook.com/profile.php?id=100052034914712"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/Waliull11880790"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/wali-ullah-130ba0188/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/wali-developer"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
