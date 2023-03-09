import React, { useState, useEffect } from "react";

const Dice = ({ id, onDiceSelected, value, isLocked }) => {
  const [isSelectedDice, setSelectedDice] = useState(false); //selectedDice is initially true and then false when a dice is selected

  const diceClick = () => {
    if (!isLocked) {
      setSelectedDice(!isSelectedDice);
      onDiceSelected(id, !isSelectedDice);
    }
  };

  useEffect(() => {
    if (isLocked) {
      setSelectedDice(false);
    }
  },[isLocked]);

  return (
    <img
      style={{
        borderStyle: isSelectedDice ? "dashed" : "solid",
        borderColor: isLocked ? "red" : "black",
      }}
      src={`./images/df${value}.png`}
      alt="dice-placeholder"
      className="dice1"
      onClick={diceClick}
    />
  );
};

export default Dice;
