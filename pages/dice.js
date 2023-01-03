import React from "react";

const DiceOne = ({ selectDice, toggle }) => {
  return (
    <img
      style={{ border: toggle ? "solid" : "dashed" }}
      src="./images/df0.jfif"
      alt="dice-placeholder"
      className="dice1"
      onClick={selectDice}
    />
  );
};

export default DiceOne;
