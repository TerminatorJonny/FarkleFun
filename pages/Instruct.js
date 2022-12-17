import React from "react";
import RulesList from "./rulesList";

const Instruct = () => {
  return (
    <div className="box-instruct">
      <div style={{ border: "2px solid black" }}>
        <h1
          className="instructions"
          style={{ textAlign: "center", color: "rgb(0, 0, 0)" }}
        >
          Winning Farkle{" "}
        </h1>
        <h2
          className="instructions"
          style={{ textAlign: "center", color: "rgb(0, 0, 0)" }}
        >
          The first player to score a total of 10,000 or more points wins,
          provided that no other players with a remaining turn can exceed that
          score.{" "}
        </h2>
        <h3
          className="instructions"
          style={{ textAlign: "center", color: "rgb(0, 0, 0)" }}
        >
          Instructions for game play will be displayed here: <RulesList />{" "}
        </h3>
        <div
          className="instructions"
          style={{ border: "2px solid black", margin: "1 rem 30 rem" }}
        ></div>
      </div>
    </div>
  );
};

export default Instruct;
