import React from "react";
import Icon from "awesome-react-icons";

const FilterPanel = () => {
  return (
    <>
      <div className="header" backgroundColor="#232f3e">
        <label>Welcome, Admin</label>
      </div>
      <input placeholder="Find a resource" className="filter"></input>
    </>
  );
};

export default FilterPanel;
