import React from "react";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import DiceBox from "./DiceBox";


const Midsec = () => {
    return (
        <div className="box-midsection" style={{ border: "2px solid black" }}>
            <div className="midsec" style={{ display: "flex", flexDirection: "row" }}>
                <PlayerOne />
                <DiceBox />
                <PlayerTwo />
            </div>
        </div>
    )
};

export default Midsec;