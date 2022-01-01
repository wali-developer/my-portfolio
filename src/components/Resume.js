import React, { useState } from "react";
import EducationApi from "../educationApi/EducationApi";
import SkillsApi from "../skillsApi/SkilllsApi";

const Resume = () => {
  const [education, setEducation] = useState(EducationApi);
  const [skills, setSkills] = useState(SkillsApi);
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
    // else if (window.scrollY > 4000 && window.scrollY < 4500) {
    //   setSkill(true);
    //   setEdu(false);
    // } else if (window.scrollY > 4500 && window.scrollY < 5000) {
    //   setAward(true);
    //   setSkill(false);
    // } else {
    //   setEdu(false);
    //   setSkill(false);
    //   setAward(false);
    // }
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
            <div class="education" id="resumeEducation">
              <h4>Education</h4>
              {education.map((data, index) => {
                const { icon, completionDate, degree, Institute, description } =
                  data;
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
            <div className="skills" id="resumeSkills">
              <h4>Skills</h4>
              <div className="row skillsRow">
                {skills.map((rec, index) => {
                  const { skill, percentage, value } = rec;
                  return (
                    <div className="col-12 col-lg-6 skillsRowCol">
                      <label
                        for={skill}
                        className="row d-flex flex-row justify-content-between"
                      >
                        <p className="col-6">{skill}</p>
                        <p className="col-6">{percentage}</p>
                      </label>
                      <progress
                        id={skill}
                        value={value}
                        max="100"
                        className="progress"
                      >
                        {percentage}
                      </progress>
                    </div>
                  );
                })}
                {/* <div className="col-12 col-lg-6"></div> */}
              </div>
            </div>
            <div class="award" id="resumeAward">
              <h4>Awards</h4>
              <div className="row awardRow d-flex flex-row">
                <div className="col-1 col-lg-1 awardRowCol1">
                  <i class="fas fa-award"></i>
                </div>
                <div className="col-11 col-lg-11 awardRowCol">
                  <h6>2021 - Present</h6>
                  <h5>
                    Best Performance
                    <br />
                    <span>Islamia College University Peshawar</span>
                  </h5>
                  <p className="m-0 p-0">
                    Honoured to be Received Best Performance award in Bachlelor
                    for obtaining second position in class.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
