import { useState, useEffect, useRef } from "react";

function PlayGameButton() {

    const [gameState, setGameState] = useState(false);
    const counter = useRef(0);

    function toggleGameState() {
        setGameState(current => !current)
        counter.current++;
    }

    useEffect(() => {
        console.log("Game State: -" + " " + gameState);
        console.log(counter);
    }, [gameState]);

    let pgbutton;

    if (counter.current >= 1) {
        pgbutton = <button className="playgame" style={{ width: "150px", height: "75px", margin: "auto", display: "none" }} onClick={() => (toggleGameState())} >Play Game?</button>
    } else {
        pgbutton = <button className="playgame" style={{ width: "150px", height: "75px", margin: "auto" }} onClick={() => (toggleGameState())} >Play Game?</button>
    }

    return (

        < div className="playgame-button" style={{ textAlign: "center" }}>
            {pgbutton}
        </div >
    )
}

export default PlayGameButton;