import react from "react";

function RollDiceButton() {
  function rollDice(diceToRoll) {
    var diceResults = new Array(diceToRoll);
    return [...diceResults].map(() => Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="rolldice-button" style={{ textAlign: "center" }}>
      <button
        className="rolldice"
        style={{ width: "150px", height: "75px", margin: "auto" }}
        onClick={() => console.log(rollDice(6))}
      >
        Roll Dice?
      </button>
    </div>
  );
}

export default RollDiceButton;
// how to determine how many dice to roll on the component
// how do we get these results back to set the dice
