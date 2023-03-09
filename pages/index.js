import React, { useState } from "react";
import Header from "./Header";
import Instruct from "./Instruct";
import PlayersBox from "./PlayersBox";
import ButtonBox from "./ButtonBox";
import Footer from "./Footer";
import Dice from "./dice";

var numberOfDice = 6;

const App = () => {
  const [gameDice, setGameDice] = useState(
    Array.apply(null, Array(numberOfDice)).map((_, i) => {
      return {
        id: i,
        value: 1,
        isSelected: false,
      };
    })
  );
  const [rollCount, setRollCount] = useState(0);
  console.log(gameDice);

  function rollDice() {
    setRollCount(rollCount + 1);
    for (var i = 0; i < gameDice.length; i++) {
      if (!gameDice[i].isSelected && !gameDice[i].isLocked) {
        gameDice[i].value = Math.floor(Math.random() * 6) + 1;
      } else {
        gameDice[i].isLocked = true;
        gameDice[i].isSelected = false;
        // This is where you can keep track of which dice got selected for scoring.
        // Calculate what the score is based on the dice that is selected.
      }
    }
    console.log(gameDice);
  }
  function onDiceSelected(i, isSelected) {
    gameDice[i].isSelected = isSelected;
    console.log(gameDice[i]);
  }
  return (
    <div className="flexbox-container">
      <div
        className="flexbox-item flexbox-item-1"
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <Header />
        <Instruct />
        <div className="box-dice">
          <div className="diceshoe">
            {gameDice.map((dice) => (
              <Dice
                id={dice.id}
                key={dice.id}
                value={dice.value}
                onDiceSelected={onDiceSelected}
                isLocked={dice.isLocked}
              />
            ))}
          </div>
        </div>
        <PlayersBox playercount={2} />
        <ButtonBox rollDice={rollDice} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
