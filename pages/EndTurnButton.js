import react from "react";

function EndTurnButton() {
    return (
        <div className="endturn-button" style={{ textAlign: "center" }}>
            <button className="endturn" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (HideEndTurnButton())}>End Turn?</button>
        </div>
    )
}

export default EndTurnButton;