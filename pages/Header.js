import React from "react";



const Header = () => {
    return (
        <div className="box-header" style={{ border: "2px solid black" }}>
            <div style={{ display: "flex", flexDirection: "row", margin: "15px" }}>
                <img className="headerpicture" src="./images/diceStack.jpg" alt="dice-stack" style={{ width: "150px", height: "150px" }} ></img>
                <h1 className="hdrlrgtext" style={{ marginLeft: "100px" }}>Farkle</h1>
                <p className="hdrsmtext" style={{ marginLeft: "100px", marginTop: "75px" }}>Farkle is a fun and challenging dice game with multiple variations and scoring options.</p>
            </div>
        </div>
    )
};

export default Header;