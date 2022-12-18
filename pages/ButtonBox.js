import React, { useState } from "react";
import DiceBox from "./DiceBox";


const ButtonBox = () => {

    const [playGame, setPlayGame] = useState(true);
   // const [playersTurn, setPlayersTurn] = useState((e) => (e.turn));

    let player1 = { turn: true, rollCount: 0, currentScore: 0, totalScore: 0 };

    let player2 = { turn: false, rollCount: 0, currentScore: 0, totalScore: 0 };

    function PlayGame() {
        setPlayGame(true);
        PlayerOneTest();
        //PlayerTwoTest();
        // hide PlayGame button ; display Roll button
    }

    function EndTurn() {
        PlayersTurn();
        // Current players turn = false
        // Current score added to total score
        // current score is cleared
        // roll counter is cleared
    }

    function EndGame() {
        // Current players turn = false
        // Current score added to total score
        // current score is cleared
        // roll counter is cleared
    }

    // State - so that one button is displayed as needed.
    function ButtonActive() {
        // PlayGame button = true
        // roll button = false
        // score button = false
        // End Turn button = false
        // End Game button = false

    }

    function PlayersTurn() {
        if (player1.turn === true && player1.rollCount >= 3) {
            player1.turn = false;
            player2.turn = true;
        }
        else if (player2.turn === true && player2.rollCount >= 3) {
            player2.turn = false;
            player1.turn = true;
        }

        // Player one default on start = true
        // after End Turn selected = current player false 
        // after 3 rolls per turn or farkle
        // on end of turn any current players current score is added to that players total score. 
    }

    function RollDice() {
        RollCounter();
        PlayersTurn();
        console.log("P1" + " " + player1.rollCount);
        console.log("P2" + " " + player2.rollCount);
        // DiceBox pass prop??
        // Roll all six dice..
        // Update Roll Dice state = true?
        // Pass dice results to scoredice??

    }

    function ScoreDice() {
        // Score state = true
        // current player selected dice are added for a current score
        // on end of turn current score is added to total score...

    }

    function RollCounter() {
        if (player1.turn === true && player2.turn === false) {
            player1.rolllCount = player1.rollCount++;
        }
        else if (player2.turn === true && player1.turn === false) { player2.rollCount = player2.rollCount++; }
    }

    function PlayerOneTest() {
        console.log("setPlayerGame" + " " + playGame);
        console.log("Player 1 turn?" + " " + player1.turn);
        console.log("Player 2 turn?" + " " + player2.turn);
        console.log("P 1 - rollcount" + " " + player1.rollCount);
        console.log("P 1 - current score" + " " + player1.currentScore);
        console.log("P 1 - total score" + " " + player1.totalScore);

    }

    function PlayerTwoTest() {
        console.log("setPlayerGame" + " " + playGame);
        console.log("Player 2 turn?" + " " + player2.turn);
        console.log("Player 1 turn?" + " " + player1.turn);
        console.log("P 2 - rollcount" + " " + player2.rollCount);
        console.log("P 2 - current score" + " " + player2.currentScore);
        console.log("P 2 - total score" + " " + player2.totalScore);

    }

    function something() {

    }

    return (
        <div className="buttonbox-wrapper" style={{ border: "2px solid black" }}>
            <div className="buttonbox" style={{ display: "flex", direction: "row", margin: "5px", justifyContent: "center" }}>
                <div className="playgame-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (PlayGame())} >Play Game?</button>
                </div>
                <div className="rolldice-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (RollDice())}>Roll Dice?</button>
                </div>
                <div className="scoredice-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (something())}>Score Dice?</button>
                </div>
                <div className="endturn-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (PlayersTurn())}>End Turn?</button>
                </div>
                <div className="endgame-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (something())}>End Game?</button>
                </div>
            </div>
        </div>
    )
}

export default ButtonBox;