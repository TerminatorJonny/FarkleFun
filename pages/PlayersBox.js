import React from "react";
import Player from "./Player";


function PlayersBox(props) {
    var array = new Array(props.playercount);
    //console.log(array)
//TODO - manipulate width to acount for number of players
    return (
        <div className="players-wrapper" style={{ display: "flex", border: "2px solid black" }}>
            {[...array].map((e, i) => {
                return (<div key={i} style={{ border: "2px solid black", width: "49%" }}>
                    <Player score={props.score}/>
                </div>);
            })}
        </div>
    )
}

export default PlayersBox;