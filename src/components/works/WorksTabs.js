import React from "react";
import { Button } from "react-bootstrap";

const WorksTabs = ({ filterData, categoryItems }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <p className="approchPara">Categories</p>
      {categoryItems.map((categoryItem, index) => {
        return (
          <Button
            color="teal"
            onClick={() => filterData(categoryItem)}
            key={index}
            className="menuButton"
            style={{ margin: "0 10px", backgroundColor: "#6c63ff" }}
          >
            {categoryItem}
          </Button>
        );
      })}
    </div>
  );
};

export default WorksTabs;
