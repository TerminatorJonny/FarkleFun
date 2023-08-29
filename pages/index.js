import React, { useEffect, useState } from "react";
import Header from "./Header";
import Instruct from "./Instruct";
import PlayersBox from "./PlayersBox";
import ButtonBox from "./ButtonBox";
import Footer from "./Footer";
import Dice from "./dice";
import {
  calculateStraightScore,
  calculateThreePairsScore,
  calculateOneTriple,
} from "./Calculations";

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
  const [diceScore, setDiceScore] = useState(0);
  randomizeDice();

  useEffect(() => {
    // Here is where you will send the diceLockTracker to the scoring component.
    // Where the scoring component will then calculate the total score.
  }, [setDiceLockTracker]);

  function randomizeDice() {
    var selectedDice = [];
    for (var i = 0; i < gameDice.length; i++) {
      if (!gameDice[i].isSelected && !gameDice[i].isLocked) {
        gameDice[i].value = Math.floor(Math.random() * 6) + 1;
      }
    }
  }

  function rollDice() {
    var selectedDice = [];
    for (var i = 0; i < gameDice.length; i++) {
      if (gameDice[i].isSelected) {
        gameDice[i].isLocked = true;
        gameDice[i].isSelected = false;
        selectedDice.push(gameDice[i].value);
      }
    }
    if (selectedDice.length == 0) {
      return;
    }
    randomizeDice();
    var currentRollCount = rollCount + 1;
    setRollCount(currentRollCount);
    setDiceLockTracker({
      ...diceLockTracker,
      [currentRollCount]: selectedDice.sort(function (a, b) {
        return a - b;
      }),
    });
  }

  let score = 0;

  function onTurnEnded() {
    setDiceScore();
    // const totalScore = gameDice[i].isLocked;
    // return totalScore;
    // We need to set the total score,
    // change the current player
    var selectedDice = [];

    for (var i = 0; i < gameDice.length; i++) {
      gameDice[i].isLocked = false;
      if (gameDice[i].isSelected) {
        selectedDice.push(gameDice[i].value);
      }
    }

    //console.log(diceLockTracker);
    for (var i = 1; i <= rollCount; i++) {
      // Continue is moving on to the next iteration of the loop
      if (!diceLockTracker[i]) {
        continue;
      }
      var currentRollCount = rollCount + 1;
      setDiceLockTracker({
        ...diceLockTracker,
        [currentRollCount]: selectedDice.sort(function (a, b) {
          return a - b;
        }),
      });
      score += calculateStraightScore(diceLockTracker[i]);
      score += calculateThreePairsScore(diceLockTracker[i]);
      score += calculateOneTriple(diceLockTracker[i]);
    }
    window.dispatchEvent(
      new CustomEvent("onScoreUpdated", { detail: { score: score } })
    );

    setDiceLockTracker({});
    randomizeDice();
    // currentPlayer.setGameScore({
    //   ...diceLockTracker,
    //   [rollCount]: selectedDice,
    // });
    setRollCount(1);
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
        <PlayersBox
          playercount={numberOfPlayers}
          onTurnEnded={onTurnEnded}
          score={score}
        />
        <ButtonBox rollDice={rollDice} onTurnEnded={onTurnEnded} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
