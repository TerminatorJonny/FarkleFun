import React, { useState } from "react";

const Dice = ({id, onDiceSelected, value }) => {
  const [isSelectedDice, setSelectedDice] = useState(false); //selectedDice is initially true and then false when a dice is selected

  const diceClick = () => {
    setSelectedDice(!isSelectedDice);
    onDiceSelected(id, !isSelectedDice);
  };

  return (
    <img
      style={{ border: isSelectedDice ? "dashed" : "solid" }}
      src={`./images/df${value}.png`}
      alt="dice-placeholder"
      className="dice1"
      onClick={diceClick}
    />
  );
};

export default Dice;
