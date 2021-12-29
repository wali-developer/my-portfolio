import React, { useState } from "react";
import Education from "./Education";
import Skill from "./Skill";
import Award from "./Award";

const Resume = () => {
  const [edu, setEdu] = useState(false);
  const [skill, setSkill] = useState(false);
  const [award, setAward] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 3400 && window.scrollY < 4400) {
      setEdu(true);
    } else {
      setEdu(false);
    }

    if (window.scrollY > 4400 && window.scrollY < 4800) {
      setSkill(true);
    } else {
      setSkill(false);
    }

    if (window.scrollY > 4800 && window.scrollY < 5500) {
      setAward(true);
    } else {
      setAward(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <section className="Resume">
        <h1>Resume!</h1>
        <div className="row no-gutters ResumeRow">
          <div className="col-12 col-lg-3 ResumeRowCol1">
            <div className="resumeMenu">
              <ul>
                <li>
                  <a href="#resumeEducation" className={edu ? "active" : ""}>
                    Education
                  </a>
                </li>
                <li>
                  <a href="#resumeSkills" className={skill ? "active" : ""}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#resumeAward" className={award ? "active" : ""}>
                    Award
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-9 ResumeRowCol2">
            <Education />
            <Skill />
            <Award />
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
