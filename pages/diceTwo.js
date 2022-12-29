import React from "react";

const DiceTwo = ({ selectDice, toggle }) => {
  return (
    <img
      style={{ border: toggle ? "solid" : "dashed" }}
      src="./images/df0.jfif"
      alt="dice-placeholder"
      className="dice2"
      onClick={selectDice}
    />
  );
};

export default DiceTwo;
