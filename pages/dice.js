import React, { useState } from "react";

const Dice = ({ onDiceSelected, value }) => {
  const [selectedDice, setSelectedDice] = useState(true); //selectedDice is initially true and then false when a dice is selected

  const diceClick = () => {
    setSelectedDice(!selectedDice);
    onDiceSelected(selectedDice);
  };

  return (
    <img
      style={{ border: selectedDice ? "solid" : "dashed" }}
      src={`./images/df${value}.png`}
      alt="dice-placeholder"
      className="dice1"
      onClick={diceClick}
    />
  );
};

export default Dice;
