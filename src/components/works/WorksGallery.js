import React, { useState } from "react";
import Menu from "./WorksMenu";
import SingleWorksDesign from "./SingleWorksDesign";
import WorksTabs from "./WorksTabs";

const allCategory = [
  ...new Set(
    Menu.map((item) => {
      return item.category;
    })
  ),
  "All",
];

const WorksGallery = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [categoryItems, setCategoryItems] = useState(allCategory);

  const filterData = (catItem) => {
    if (catItem === "All") {
      setMenuData(Menu);
      return;
    }

    const filterD = Menu.filter((filterItem) => {
      return filterItem.category === catItem;
    });
    setMenuData(filterD);
  };

  return (
    <div className="ourDesign" style={{ padding: "30px 10px" }}>
      <div className="ourDesignUpperSec" style={{ padding: "0" }}>
        <h2>
          <strong>Detail page of my Works</strong> <br />
        </h2>
        <hr />
      </div>
      <WorksTabs filterData={filterData} categoryItems={categoryItems} />
      <div className="ourDesignTemplateSec row">
        {/* Render Single works menu */}
        <SingleWorksDesign menuData={menuData} />
      </div>
    </div>
  );
};

export default WorksGallery;
