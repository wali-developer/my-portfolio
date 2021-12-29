import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import ourDesignApi from "../ourDesignApi/ourDesignApi";
import { Link } from "react-router-dom";

const OurDesigns = () => {
  const [designs, setDesigns] = useState(ourDesignApi);
  const [scrollEffect, setScrollEffect] = useState(false);

  const HandleTranslateOnScroll = () => {
    if (window.scrollY >= 2200 && window.scrollY < 2400) {
      setScrollEffect(true);
    } else {
      setScrollEffect(false);
    }
  };

  window.addEventListener("scroll", HandleTranslateOnScroll);
  return (
    <>
      <section>
        <div className="ourDesign">
          <div className="ourDesignUpperSec">
            <p className="approchPara">my projects</p>
            <h2>
              <strong>Have a look at my latest Designs,</strong> <br />
              that I made with core of my ❤
            </h2>
            <p>
              Received a lot of positive feedback on the designs that I created
              and firmly believe that the clients perfectly satisfies with the
              designs.
            </p>
          </div>
          <div
            className={
              scrollEffect
                ? "ourDesignTemplateSec row ourDesignScrollEffect"
                : "ourDesignTemplateSec row"
            }
          >
            {designs.map((template) => {
              const { id, image } = template;
              return (
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-4 template"
                  key={id}
                >
                  <img src={image} alt="template" className="img-fluid" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="iconPlusPara d-flex flex-row justify-content-center align-items-center">
          <FaLongArrowAltRight className="icon" />
          <Link to="Works">See More</Link>
        </div>
      </section>
    </>
  );
};

export default OurDesigns;
