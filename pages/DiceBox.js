import React from "react";
import DiceOne from "./dice";

const DiceBox = ({ selectDice, toggle }) => {
  return (
    <div className="box-dice">
      <div className="diceshoe">
        <DiceOne selectDice={selectDice} toggle={toggle} />
        <DiceOne selectDice={selectDice} toggle={toggle} />
        <DiceOne selectDice={selectDice} toggle={toggle} />
        <DiceOne selectDice={selectDice} toggle={toggle} />
        <DiceOne selectDice={selectDice} toggle={toggle} />
        <DiceOne selectDice={selectDice} toggle={toggle} />
      </div>
    </div>
  );
};

export default DiceBox;
