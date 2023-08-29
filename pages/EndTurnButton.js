import react, { useState } from "react";

//const [EndTurn, setEndTurn] = useState();

function EndTurnButton({ onTurnEnded }) {
    return (
        <div className="endturn-button" style={{ textAlign: "center" }}>
            <button className="endturn" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (onTurnEnded())}>End Turn?</button>
        </div>
    )
}

export default EndTurnButton;