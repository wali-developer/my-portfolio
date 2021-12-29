import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [navbar, setNavbar] = useState(false);

  const HandleNavbarScroll = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", HandleNavbarScroll);
  return (
    <>
      <nav
        className={
          navbar
            ? "navbar navbar-expand-lg navbar-light sticky-top NavRow navbarBg"
            : "navbar navbar-expand-lg navbar-light sticky-top NavRow "
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand NavbarBrand" to="home">
            <img
              src="images/logo.png"
              alt="Logo"
              width={"80px"}
              height={"60px"}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" id="about">
                <Link className="nav-link active" aria-current="page" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item" id="usecase">
                <Link className="nav-link" to="services">
                  Services
                </Link>
              </li>
              <li className="nav-item" id="products">
                <Link
                  className="nav-link"
                  to="about"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  About
                </Link>
              </li>
              <li className="nav-item" id="builders">
                <Link className="nav-link" to="resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item" id="builders">
                <Link className="nav-link" to="works">
                  Works
                </Link>
              </li>
              <li className="nav-item" id="builders">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
