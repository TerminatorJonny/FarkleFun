import react from "react";

function EndTurnButton() {

    function something3() {

    }

    return (
        <div className="endturn-button" style={{ textAlign: "center" }}>
            <button className="endturn" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (something3())}>End Turn?</button>
        </div>
    )
}

export default EndTurnButton;