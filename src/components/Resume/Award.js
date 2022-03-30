import React from "react";

const Award = () => {
  return (
    <>
      <div class="award" id="resumeAward">
        <h4>Awards</h4>
        <div className="row awardRow d-flex flex-row">
          <div className="col-1 col-lg-1">
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
              Honoured to be Received Best Performance award in Bachlelor for
              obtaining second position in class.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;
