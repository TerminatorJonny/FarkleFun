import React from "react";

const ButtonBox = () => {
    return (
        <div className="buttonbox-wrapper" style={{ border: "2px solid black" }}>
            <div className="buttonbox" style={{ display: "flex", direction: "row", margin: "5px", justifyContent: "center" }}>
                <div className="box-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }}>Play Game?</button>
                </div>
                <div className="box-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }}>Choose Player?</button>
                </div>
                <div className="box-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }}>Roll Dice?</button>
                </div>
                <div className="box-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }}>Score Dice?</button>
                </div>
                <div className="box-button" style={{ textAlign: "center" }}>
                    <button className="prsbutton" style={{ width: "150px", height: "75px", margin: "auto" }}>End Turn?</button>
                </div>
            </div>
        </div>
    )

}

export default ButtonBox;

// this ButtonBox component needs a redesign, created as a placeholder 