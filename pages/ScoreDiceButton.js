import react from "react";

function ScoreDiceButton() {

    function something2() {

    }

    return (
        <div className="scoredice-button" style={{ textAlign: "center" }}>
            <button className="scoredice" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (something2())}>Score Dice?</button>
        </div>
    )
}


export default ScoreDiceButton;