import react, { useEffect, useState } from "react";
import { useCallbackRef } from "use-callback-ref";

function Player(props) {
  const [totalScore, setTotalScore] = useState(0);
  const previousScoreRef = useCallbackRef(null, (previousScore) => {
    setTotalScore(previousScore + totalScore);
  });

  function updateCurrentScore(event) {
    previousScoreRef.current = event.detail.score;
  }

  useEffect(() => {
    window.addEventListener("onScoreUpdated", updateCurrentScore);
    return () => {
      window.removeEventListener("onScoreUpdated", updateCurrentScore);
    };
  }, []);
  return (
    <div className="player" style={{ margin: "20px" }}>
      <h1>{props.name}</h1>
      <h3>Roll - Selected Score: {props.rollScore}</h3>
      <h3>Turn - Current Score: {previousScoreRef.current}</h3>
      <h3>Game - Total Score: {totalScore}</h3>
    </div>
  );
}

export default Player;
