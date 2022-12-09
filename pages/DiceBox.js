import React from "react";

const DiceBox = () => {
    return (
        <div className="box-dice">
            <div className="diceshoe">
                <img src="./images/df0.jfif" alt="dice-placeholder" className="dice1" />
                <img src="./images/df0.jfif" alt="dice-placeholder" className="dice2" />
                <img src="./images/df0.jfif" alt="dice-placeholder" className="dice3" />
                <img src="./images/df0.jfif" alt="dice-placeholder" className="dice4" />
                <img src="./images/df0.jfif" alt="dice-placeholder" className="dice5" />
                <img src="./images/df0.jfif" alt="dice-placeholder" className="dice6" />
            </div>
            <div className="box-button" style={{ textAlign: "center" }}>
                <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }}>Play Game ?</button>
            </div>
        </div>
    )
};

export default DiceBox;