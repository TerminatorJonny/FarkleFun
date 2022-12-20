import React, { useState } from "react";


const ButtonBox = () => {
    // Buttons State for Hide or Display..
    const [playgameButton, setPlayGameButton] = useState(true);

    function HidePlayGame() {
        setPlayGameButton(false);
    }

    const [rollButton, setRollButton] = useState(true);

    function HideRollButton() {
        setRollButton(false)
    }

    const [scoreDiceButton, setScoreDiceButton] = useState(true);

    function HideScoreDiceButton() {
        setScoreDiceButton(false);
    }

    const [endTurnButton, setEndTurnButton] = useState(true);

    function HideEndTurnButton() {
        setEndTurnButton(false);
    }

    const [endGameButton, setEndGameButton] = useState(true);

    function HideEndGameButton() {
        setEndGameButton(false);
    }

    function StartGame() {
        setRollButton(true);
    }

    function PlayGame() {
        StartGame();
        alert("Hover over Player One or Player Two to choose starting player.");

    }


    return (
        <div className="buttonbox-wrapper" style={{ border: "2px solid black" }}>
            <div className="buttonbox" style={{ display: "flex", direction: "row", margin: "5px", justifyContent: "center" }}>
                {playgameButton && <div className="playgame-button" style={{ textAlign: "center" }}>
                    <button className="playgame" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (PlayGame())} >Play Game?</button>
                </div>}
                {rollButton && <div className="rolldice-button" style={{ textAlign: "center" }}>
                    <button className="rolldice" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (HideRollButton())}>Roll Dice?</button>
                </div>}
                {scoreDiceButton && <div className="scoredice-button" style={{ textAlign: "center" }}>
                    <button className="scoredice" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (HideScoreDiceButton())}>Score Dice?</button>
                </div>}
                {endTurnButton && <div className="endturn-button" style={{ textAlign: "center" }}>
                    <button className="endturn" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (HideEndTurnButton())}>End Turn?</button>
                </div>}
                {endGameButton && <div className="endgame-button" style={{ textAlign: "center" }}>
                    <button className="endgame" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (HideEndGameButton())}>End Game?</button>
                </div>}
            </div>
        </div>
    )
}

export default ButtonBox;