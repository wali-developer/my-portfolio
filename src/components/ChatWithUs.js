import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChatWithUs = () => {
  return (
    <>
      <section className="chat">
        <div className="chatContent">
          <h2>
            <strong>Hire Me!</strong> <br /> ‍
          </h2>
          <p>
            I can do the work and deliver you exceptional results, I belive that
            the combination of my Skills and Hard work make the work easy for
            me.
          </p>
          <div className="d-flex flex-row flex-wrap justify-content-between fw-lighter">
            <p>+923038175044</p>
            <p>waliullah0540@gmail.com</p>
          </div>
          <Link to="contact">
            <Button variant="primary" size="lg" className="primaryBtn my-2">
              Hire Me
            </Button>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F8F9FC"
              fill-opacity="1"
              d="M0,224L120,213.3C240,203,480,181,720,186.7C960,192,1200,224,1320,240L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default ChatWithUs;
