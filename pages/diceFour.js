import React from "react";

const DiceFour = ({ selectDice, toggle }) => {
  return (
    <img
      style={{ border: toggle ? "solid" : "dashed" }}
      src="./images/df0.jfif"
      alt="dice-placeholder"
      className="dice4"
      onClick={selectDice}
    />
  );
};

export default DiceFour;
