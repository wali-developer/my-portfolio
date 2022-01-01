import React from "react";

const AboutUs = () => {
  return (
    <>
      <div id="skew">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,256L80,250.7C160,245,320,235,480,240C640,245,800,267,960,245.3C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <div className="buildingTools row">
          <div className="col-12 col-lg-5 bulidToolsCol1">
            <p className="buildPara">My Profile</p>
            <h2>
              <strong>About Me!</strong>
            </h2>
            <p>
              I'm a web developer | designer focused on crafting clean and user
              friendly experience. Having experience of building website with
              JavaScript, ReactJS, Bootstrap and some other Quality libraries
              and framworks
            </p>
          </div>
          <div className="col-12 col-lg-7 buildToolsCol2">
            <div className="personalDetails">
              <h4 className="mb-4">Personal Details</h4>
              <div className="d-flex flex-row justfiy-content-center">
                <div className="personalDetailsCol">
                  <h6>Name:</h6>
                  <h6>Education:</h6>
                  <h6>Development status:</h6>
                  <h6>Address:</h6>
                  <h6>Phone</h6>
                  <h6>Mail</h6>
                </div>
                <div className="personalDetailsCol" id="personalDetailsCol2">
                  <h6>Wali Ullah</h6>
                  <h6>Software Engineering</h6>
                  <h6>Full time</h6>
                  <h6>Peshawar, Pakistan</h6>
                  <h6>+923038175044</h6>
                  <h6>waliullah0540@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f9f9ff"
          fill-opacity="1"
          d="M0,256L80,250.7C160,245,320,235,480,240C640,245,800,267,960,245.3C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default AboutUs;
