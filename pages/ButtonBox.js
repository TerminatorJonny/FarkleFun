import React from "react";
import EndGameButton from "./EndGameButton";
import EndTurnButton from "./EndTurnButton";
import PlayGameButton from "./PlayGameButton";
import RollDiceButton from "./RollDiceButton";
import ScoreDiceButton from "./ScoreDiceButton";

const ButtonBox = ({ rollDice, onTurnEnded }) => {
  return (
    <div className="buttonbox-wrapper" style={{ border: "2px solid black" }}>
      <div
        className="buttonbox"
        style={{
          display: "flex",
          direction: "row",
          margin: "5px",
          justifyContent: "center",
        }}
      >
        <PlayGameButton />
        <RollDiceButton rollDice={rollDice} />
        <ScoreDiceButton />
        <EndTurnButton onTurnEnded={onTurnEnded} />
        <EndGameButton />
      </div>
    </div>
  );
};

export default ButtonBox;
