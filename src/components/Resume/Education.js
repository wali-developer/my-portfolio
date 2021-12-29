import React, { useState } from "react";
import EducationApi from "../../educationApi/EducationApi";

const Education = () => {
  const [education, setEducation] = useState(EducationApi);

  return (
    <>
      <div class="education" id="resumeEducation">
        <h4>Education</h4>
        {education.map((data, index) => {
          const { icon, completionDate, degree, Institute, description } = data;
          return (
            <div className="row no-gutters educationRow d-flex flex-row">
              <div className="col-1 col-lg-1">
                <i class={icon}></i>
              </div>
              <div className="col-11 col-lg-11 educationRowCol">
                <h6>{completionDate}</h6>
                <h5>
                  {degree}
                  <br></br>
                  <span>{Institute}</span>
                </h5>
                {/* <span></span> */}
                <p className="m-0 p-0">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
