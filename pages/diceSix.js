import React from "react";

const DiceSix = ({ selectDice, toggle }) => {
  return (
    <img
      style={{ border: toggle ? "solid" : "dashed" }}
      src="./images/df0.jfif"
      alt="dice-placeholder"
      className="dice6"
      onClick={selectDice}
    />
  );
};

export default DiceSix;
