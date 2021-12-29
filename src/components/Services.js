import React, { useState } from "react";
import servicesApi from "../servicesApi/ServicesApi";

const Services = () => {
  const [services, setServices] = useState(servicesApi);
  return (
    <>
      <div id="services" className="bg-white">
        <div className="servicesRow row d-flex flex-row align-items-center justify-content-center">
          <div className="col-12 col-lg-4 servicesRowCol1">
            <p className="buildPara">My Services</p>
            <h2>
              <strong>What I do!</strong>
            </h2>
            <p>
              I provide the web development and Designing Services with the most
              advance Technologies and tools that used to be develop a stunning
              website for your business.
            </p>
          </div>
          <div className="col-12 col-lg-8 servicesRowCol2">
            <div className="row servicesInnerRow">
              {services.map((data, index) => {
                const { icon, heading, text } = data;
                return (
                  <div
                    className="col-12 col-lg-6 servicesInnerRowCol"
                    key={index}
                  >
                    <i className={icon}></i>
                    <h6>{heading}</h6>
                    <p className="p-0 m-0">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
