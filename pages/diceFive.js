import React from "react";

const DiceFive = ({ selectDice, toggle }) => {
  return (
    <img
      style={{ border: toggle ? "solid" : "dashed" }}
      src="./images/df0.jfif"
      alt="dice-placeholder"
      className="dice5"
      onClick={selectDice}
    />
  );
};

export default DiceFive;
