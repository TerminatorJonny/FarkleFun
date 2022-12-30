import react from "react";

function RollDiceButton() {

    function something() {

    }

    return (
        <div className="rolldice-button" style={{ textAlign: "center" }}>
            <button className="rolldice" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (something())}>Roll Dice?</button>
        </div>
    )
}

export default RollDiceButton;