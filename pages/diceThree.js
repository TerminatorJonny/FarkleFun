import React from "react";

const DiceThree = ({ selectDice, toggle }) => {
  return (
    <img
      style={{ border: toggle ? "solid" : "dashed" }}
      src="./images/df0.jfif"
      alt="dice-placeholder"
      className="dice3"
      onClick={selectDice}
    />
  );
};

export default DiceThree;
