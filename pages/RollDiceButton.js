import react from "react";

function RollDiceButton({ rollDice }) {
  return (
    <div className="rolldice-button" style={{ textAlign: "center" }}>
      <button
        className="rolldice"
        style={{ width: "150px", height: "75px", margin: "auto" }}
        onClick={() => rollDice()}
      >
        Roll Dice?
      </button>
    </div>
  );
}

export default RollDiceButton;
// how to determine how many dice to roll on the component
// how do we get these results back to set the dice
