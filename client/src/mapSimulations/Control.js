import React, { useState } from "react";
import getRandomInt from "../helpers/random";

const Control = ({
  strengthBlue,
  strengthRed,
  team1,
  team2,
  map,
  setMap,
  setMapWinsBlue,
  setMapWinsRed,
  mapWinsBlue,
  mapWinsRed,
}) => {
  const [winner, setWinner] = useState("");
  const [point, setPoint] = useState(1);
  const [scoreBlue, setScoreBlue] = useState(0);
  const [scoreRed, setScoreRed] = useState(0);
  const [percentBlue, setPercentBlue] = useState(0);
  const [percentRed, setPercentRed] = useState(0);

  const simulateControlMap = () => {
    if (winner === "") {
      if (percentBlue === 100 || percentRed === 100) {
        setPercentBlue(0);
        setPercentRed(0);
        setPoint(point + 1);
      } else {
        let fightBlue = strengthBlue + getRandomInt(20);
        let fightRed = strengthRed + getRandomInt(20);
        console.log({ fightBlue, fightRed });
        if (fightBlue > fightRed && percentBlue < 99 && percentBlue !== 99) {
          setPercentBlue(percentBlue + 33);
        } else if (
          fightRed > fightBlue &&
          percentRed < 99 &&
          percentRed !== 99
        ) {
          setPercentRed(percentRed + 33);
        } else if (fightBlue > fightRed && percentBlue >= 99) {
          setPercentBlue(100);
          setScoreBlue(scoreBlue + 1);
          if (scoreBlue === 1) {
            setWinner("blue");
            setMapWinsBlue(mapWinsBlue + 1);
          }
        } else if (fightRed > fightBlue && percentRed >= 99) {
          setPercentRed(100);
          setScoreRed(scoreRed + 1);
          if (scoreRed === 1) {
            setWinner("red");
            setMapWinsRed(mapWinsRed + 1);
          }
        } else if (fightBlue === fightRed) {
          simulateControlMap();
        }
      }
    }
  };

  return (
    <div>
      <p>Control:</p>
      {winner === "" && (
        <>
          <p>
            Score: {team1} {scoreBlue} : {scoreRed} {team2}
          </p>
          <p>
            Point {point}: {percentBlue}% : {percentRed}%
          </p>
          <button
            onClick={() => {
              simulateControlMap();
            }}
          >
            {percentBlue === 0 &&
            percentRed === 0 &&
            scoreBlue === 0 &&
            scoreRed === 0
              ? "Start Map"
              : "Next Fight"}
          </button>
        </>
      )}
      {winner !== "" && (
        <>
          <p>
            {winner === "blue" ? team1 : team2} wins the Map{" "}
            {scoreBlue > scoreRed ? scoreBlue : scoreRed} :{" "}
            {scoreBlue > scoreRed ? scoreRed : scoreBlue}.
          </p>
          <button onClick={() => setMap(map + 1)}>Next Map</button>
        </>
      )}
    </div>
  );
};

export default Control;
