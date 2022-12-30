import react from "react";

function EndGameButton() {
    return (
        <div className="endgame-button" style={{ textAlign: "center" }}>
            <button className="endgame" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (HideEndGameButton())}>End Game?</button>
        </div>

    )

}

export default EndGameButton;