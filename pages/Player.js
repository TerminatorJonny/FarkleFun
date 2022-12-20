
import react from "react";

function Player(props) {

    return (

        <div className="player" style={{ margin: "20px" }}>
            <h1>{props.name}</h1>
            <h3>Roll Count: - {props.rollCount}</h3>
            <h3>Turn - Current Score: {props.currentScore}</h3>
            <h3>Game - Total Score: {props.totalScore}</h3>
        </div>
    )
}

export default Player;