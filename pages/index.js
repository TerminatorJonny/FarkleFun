import React, { useState } from "react";
import Header from "./Header";
import Instruct from "./Instruct";
import DiceBox from "./DiceBox";
import PlayersBox from "./PlayersBox";
import ButtonBox from "./ButtonBox";
import Footer from "./Footer";

const App = () => {
  const [selectedDice, setSelectedDice] = useState(true); //selectedDice is initially true and then false when a dice is selected
  const [toggle, setToggle] = useState(true); //Updates CSS based on which dice is selected. to show which dice is kept.
  const diceClick = () => {
    setSelectedDice(!selectedDice);
    setToggle(!toggle);
  };
  return (
    <div className="flexbox-container">
      <div
        className="flexbox-item flexbox-item-1"
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <Header />
        <Instruct />
        {selectedDice ? (
          <DiceBox selectDice={diceClick} toggle={toggle} />
        ) : (
          <DiceBox />
        )}
        <PlayersBox playercount={2} />
        <ButtonBox />
        <Footer />
      </div>
    </div>
  );
};

export default App;
