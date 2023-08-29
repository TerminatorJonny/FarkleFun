import react from "react";

function EndGameButton({ }) {

    return (
        <div className="endgame-button" style={{ textAlign: "center" }}>
            <button className="endgame" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (something4())}>End Game?</button>
        </div>

    )

}

export default EndGameButton;