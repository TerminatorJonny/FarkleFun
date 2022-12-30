import React from "react";
import DiceFive from "./diceFive";
import DiceFour from "./diceFour";
import DiceOne from "./DiceOne";
import DiceSix from "./diceSix";
import DiceThree from "./diceThree";
import DiceTwo from "./diceTwo";

const DiceBox = ({ selectDice, toggle }) => {
  return (
    <div className="box-dice">
      <div className="diceshoe">
        <DiceOne selectDice={selectDice} toggle={toggle} />
        <DiceTwo selectDice={selectDice} toggle={toggle} />
        <DiceThree selectDice={selectDice} toggle={toggle} />
        <DiceFour selectDice={selectDice} toggle={toggle} />
        <DiceFive selectDice={selectDice} toggle={toggle} />
        <DiceSix selectDice={selectDice} toggle={toggle} />
      </div>
    </div>
  );
};

export default DiceBox;
