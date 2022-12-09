import React from "react";

const PlayerOne = () => {
    return (
        <div className="box-playerone" style={{ border: "2px solid black" }}>
            <div className="playerone" style={{ width: "250px", margin: "20px" }}>
                <h3>Player One</h3>
                <br></br>
                <h3>Current Score: 0</h3>
                <br></br>
                <h3>Current Roll Count: 0</h3>
                <br></br>
            </div>
        </div>
    )
};

export default PlayerOne;