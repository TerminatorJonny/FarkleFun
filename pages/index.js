import React, { useEffect, useState } from "react";
import Header from "./Header";
import Instruct from "./Instruct";
import PlayersBox from "./PlayersBox";
import ButtonBox from "./ButtonBox";
import Footer from "./Footer";
import Dice from "./dice";

var numberOfDice = 6;
var numberOfPlayers = 2;

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
  const [diceLockTracker, setDiceLockTracker] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState();

  useEffect(() => {
    // Here is where you will send the diceLockTracker to the scoring component.
    // Where the scoring component will then calculate the total score.
  }, [setDiceLockTracker]);

  function rollDice() {
    var selectedDice = [];
    var currentRollCount = rollCount + 1;
    setRollCount(currentRollCount);
    for (var i = 0; i < gameDice.length; i++) {
      if (!gameDice[i].isSelected && !gameDice[i].isLocked) {
        gameDice[i].value = Math.floor(Math.random() * 6) + 1;
      } else if (gameDice[i].isSelected) {
        gameDice[i].isLocked = true;
        gameDice[i].isSelected = false;
        selectedDice.push(gameDice[i].value);
      }
    }
    setDiceLockTracker({
      ...diceLockTracker,
      [currentRollCount]: selectedDice,
    });
    console.log(diceLockTracker);
  }
  function onTurnEnded() {
    // We need to set the total score, lock in the currently selected dice, 
    // unlock and re-roll all of the dice, change the current player, reset the roll count
    var selectedDice = [];

    for (var i = 0; i < gameDice.length; i++) {
      if (gameDice[i].isSelected) {
        
        selectedDice.push(gameDice[i].value);
      }
    }
    setDiceLockTracker({});
    randomizeDice();
    currentPlayer.setGameScore({
      ...diceLockTracker,
      [rollCount]: selectedDice,
    })
    setRollCount(1)
  }

  function onDiceSelected(i, isSelected) {
    gameDice[i].isSelected = isSelected;
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
        <PlayersBox playercount={numberOfPlayers} />
        <ButtonBox rollDice={rollDice} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
