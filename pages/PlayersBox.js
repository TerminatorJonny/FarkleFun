import React from "react";

const PlayersBox = () => {

    return (
        <div className="players-wrapper" style={{ display: "flex", border: "2px solid black" }}>
            <div className="box-playerone" style={{ border: "2px solid black", width: "49%" }}>
                <div className="playerone" style={{ margin: "20px" }}>
                    <h1>- Player One -</h1>
                    <h3>Roll Count: 0</h3>
                    <h3>Turn - Current Score: 0</h3>
                    <h3>Game - Total Score: 0</h3>
                </div>
            </div>
            <div className="box-playertwo" style={{ border: "2px solid black", width: "49%" }}>
                <div className="playertwo" style={{ margin: "20px" }}>
                    <h1>- Player Two -</h1>

                    <h3>Roll Count: 0</h3>
                    <h3>Turn - Current Score: 0</h3>
                    <h3>Game - Total Score: 0</h3>
                </div>
            </div>
        </div>
    )
}

export default PlayersBox;