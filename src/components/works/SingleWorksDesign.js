import React from "react";

const SingleWorksDesign = ({ menuData }) => {
  return (
    <>
      {menuData.map((rec) => {
        const { image, id } = rec;
        return (
          <div
            className="col-12 col-sm-6 col-md-6 col-lg-4 template"
            style={{ margin: "15px auto", padding: "8px" }}
            key={id}
          >
            <img
              src={image}
              wrapped
              ui={false}
              alt="design image"
              className="img-fluid"
            />
          </div>
        );
      })}
    </>
  );
};

export default SingleWorksDesign;
