import { React, useState } from "react";


const ButtonBox = () => {

    // When PlayGame button is selected?
    function PlayGame() {
        // set state of Game
        // set state of whoseTurn it is default #1 on start
        // set state of Total score
        // Set state of turn score
        // set state of roll count
        // hide PlayGame button ; display Roll button
    }

    function RollDice() {
        // DiceBox pass prop?
        // Roll Dice state = true?

    }

    function ScoreDice() {
        // Score state = true
        // current player selected dice are added for a current score
        // on end of turn current score is added to total score...

    }

    function EndTurn() {
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
        // Player one default on start = true
        // after End Turn selected = current player false 
        // after 3 rolls per turn or farkle
        // on end of turn any current players current score is added to that players total score. 
    }

    function RollCounter() {
        // Roll state = true
        // WhoseTurn() ?
        // on turn roll adds one roll per button click
        // logic needed for 3 rolls on a turn, or if score allows additional roll. 
    }


    return (
        <div className="buttonbox-wrapper" style={{ border: "2px solid black" }}>
            <div className="buttonbox" style={{ display: "flex", direction: "row", margin: "5px", justifyContent: "center" }}>
                <div className="playgame-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }}>Play Game?</button>
                </div>
                <div className="rolldice-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }}>Roll Dice?</button>
                </div>
                <div className="scoredice-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }}>Score Dice?</button>
                </div>
                <div className="endturn-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }}>End Turn?</button>
                </div>
                <div className="endgame-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }}>End Game?</button>
                </div>
            </div>
        </div>
    )
}

export default ButtonBox;

// this ButtonBox component needs a redesign, created as a placeholder 