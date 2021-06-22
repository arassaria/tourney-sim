import React, { useState } from "react";
import getRandomInt from "../helpers/random";

const Escort = ({
  team1,
  team2,
  strengthBlue,
  strengthRed,
  map,
  setMap,
  setMapWinsBlue,
  setMapWinsRed,
  mapWinsBlue,
  mapWinsRed,
}) => {
  const [winner, setWinner] = useState("");
  const [scoreBlue, setScoreBlue] = useState(0);
  const [scoreRed, setScoreRed] = useState(0);
  const [distancePoint1Blue, setDistancePoint1Blue] = useState(0);
  const [distancePoint1Red, setDistancePoint1Red] = useState(0);
  const [distancePoint2Blue, setDistancePoint2Blue] = useState(0);
  const [distancePoint2Red, setDistancePoint2Red] = useState(0);
  const [distancePoint3Blue, setDistancePoint3Blue] = useState(0);
  const [distancePoint3Red, setDistancePoint3Red] = useState(0);
  const [timeBankBlue, setTimeBankBlue] = useState(240);
  const [timeBankRed, setTimeBankRed] = useState(240);
  const [defense, setDefense] = useState("blue");

  const simulateEscortMap = () => {
    if (winner === "") {
      let fightBlue = strengthBlue + getRandomInt(20);
      let fightRed = strengthRed + getRandomInt(20);
      console.log({ fightBlue, fightRed });
      if (defense === "blue") {
        if (fightBlue > fightRed && timeBankRed > 0) {
          setTimeBankRed(timeBankRed - 30);
        } else if (fightBlue > fightRed && timeBankRed === 0) {
          setDefense("red");
        } else if (
          fightRed > fightBlue &&
          timeBankRed > 0 &&
          timeBankBlue > 0
        ) {
          if (scoreRed === 0) {
            if (distancePoint1Red < 160) {
              setDistancePoint1Red(distancePoint1Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (distancePoint1Red === 160) {
              setDistancePoint1Red(distancePoint1Red + 80);
              setTimeBankRed(timeBankRed + 150);
              setScoreRed(scoreRed + 1);
            }
          } else if (scoreRed === 1) {
            if (distancePoint2Red < 160) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (distancePoint2Red === 160) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setTimeBankRed(timeBankRed + 150);
              setScoreRed(scoreRed + 1);
            }
          } else if (scoreRed === 2) {
            if (distancePoint3Red < 160) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (distancePoint3Red === 160) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setTimeBankRed(timeBankRed + 150);
              setScoreRed(scoreRed + 1);
              setDefense("red");
            }
          } else if (scoreRed === 3 || scoreRed === 6 || scoreRed === 9) {
            if (distancePoint1Red < 160) {
              setDistancePoint1Red(distancePoint1Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (distancePoint1Red === 160) {
              setDistancePoint1Red(distancePoint1Red + 80);
              setTimeBankRed(timeBankRed - 30);
              setScoreRed(scoreRed + 1);
            }
          } else if (scoreRed === 4 || scoreRed === 7 || scoreRed === 10) {
            if (distancePoint2Red < 160) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (distancePoint2Red === 160) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setTimeBankRed(timeBankRed - 30);
              setScoreRed(scoreRed + 1);
            }
          } else if (scoreRed === 5 || scoreRed === 8 || scoreRed === 11) {
            if (distancePoint3Red < 160) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (distancePoint3Red === 160) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setTimeBankRed(timeBankRed - 30);
              setScoreRed(scoreRed + 1);
              setDefense("red");
            }
          }
        } else if (fightRed > fightBlue && timeBankBlue === 0) {
          if (scoreRed > scoreBlue) {
            setWinner("red");
            setMapWinsRed(mapWinsRed + 1);
          } else if (scoreRed === scoreBlue) {
            if (
              (distancePoint1Red >= distancePoint1Blue &&
                distancePoint1Red !== 0) ||
              (distancePoint2Red >= distancePoint2Blue &&
                distancePoint2Red !== 0) ||
              (distancePoint3Red >= distancePoint3Blue &&
                distancePoint3Red !== 0)
            ) {
              setScoreRed(scoreRed + 1);
              setWinner("red");
              setMapWinsRed(mapWinsRed + 1);
            } else if (
              distancePoint1Blue > distancePoint1Red &&
              distancePoint1Red < 160 &&
              timeBankRed > 0
            ) {
              setDistancePoint1Red(distancePoint1Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (
              distancePoint1Blue > distancePoint1Red &&
              distancePoint1Red >= 160 &&
              timeBankRed > 0
            ) {
              setDistancePoint1Red(distancePoint1Red + 80);
              setTimeBankRed(timeBankRed + 30);
              setScoreRed(scoreRed + 1);
            } else if (
              distancePoint2Blue > distancePoint2Red &&
              distancePoint2Red < 160 &&
              timeBankRed > 0
            ) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (
              distancePoint2Blue > distancePoint2Red &&
              distancePoint2Red >= 160 &&
              timeBankRed > 0
            ) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setTimeBankRed(timeBankRed + 30);
              setScoreRed(scoreRed + 1);
            } else if (
              distancePoint3Blue > distancePoint3Red &&
              distancePoint3Red < 160 &&
              timeBankRed > 0
            ) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (
              distancePoint3Blue > distancePoint3Red &&
              distancePoint3Red >= 160 &&
              timeBankRed > 0
            ) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setTimeBankRed(timeBankRed + 30);
              setScoreRed(scoreRed + 1);
              setDefense("red");
            }
          } else if (scoreBlue > scoreRed) {
            if (
              distancePoint1Blue > distancePoint1Red &&
              distancePoint1Red < 160
            ) {
              setDistancePoint1Red(distancePoint1Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (
              distancePoint1Blue > distancePoint1Red &&
              distancePoint1Red >= 160
            ) {
              setDistancePoint1Red(distancePoint1Red + 80);
              setTimeBankRed(timeBankRed - 30);
              setScoreRed(scoreRed + 1);
            } else if (
              distancePoint2Blue > distancePoint2Red &&
              distancePoint2Red < 160
            ) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (
              distancePoint2Blue > distancePoint2Red &&
              distancePoint2Red >= 160
            ) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setTimeBankRed(timeBankRed + 30);
              setScoreRed(scoreRed + 1);
            } else if (
              distancePoint3Blue > distancePoint3Red &&
              distancePoint3Red < 160
            ) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (
              distancePoint3Blue > distancePoint3Red &&
              distancePoint3Red >= 160
            ) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setTimeBankRed(timeBankRed - 30);
              setScoreRed(scoreRed + 1);
              setDefense("red");
            }
          }
        } else if (fightRed === fightBlue) {
          simulateEscortMap();
        }
      } else if (defense === "red") {
        if (fightRed > fightBlue && timeBankBlue > 0) {
          setTimeBankBlue(timeBankBlue - 30);
        } else if (fightRed > fightBlue && timeBankBlue === 0) {
          setDefense("blue");
        } else if (
          fightBlue > fightRed &&
          timeBankRed > 0 &&
          timeBankBlue > 0
        ) {
          if (scoreBlue === 0) {
            if (distancePoint1Blue < 160) {
              setDistancePoint1Blue(distancePoint1Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (distancePoint1Blue === 160) {
              setDistancePoint1Blue(distancePoint1Blue + 80);
              setTimeBankBlue(timeBankBlue + 150);
              setScoreBlue(scoreBlue + 1);
            }
          } else if (scoreBlue === 1) {
            if (distancePoint2Blue < 160) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (distancePoint2Blue === 160) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setTimeBankBlue(timeBankBlue + 150);
              setScoreBlue(scoreBlue + 1);
            }
          } else if (scoreBlue === 2) {
            if (distancePoint3Blue < 160) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (distancePoint3Blue === 160) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setTimeBankBlue(timeBankBlue + 150);
              setScoreBlue(scoreBlue + 1);
              setDefense("blue");
            }
          } else if (scoreBlue === 3 || scoreBlue === 6 || scoreBlue === 9) {
            if (distancePoint1Blue < 160) {
              setDistancePoint1Blue(distancePoint1Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (distancePoint1Blue === 160) {
              setDistancePoint1Blue(distancePoint1Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
              setScoreBlue(scoreBlue + 1);
            }
          } else if (scoreBlue === 4 || scoreBlue === 7 || scoreBlue === 10) {
            if (distancePoint2Blue < 160) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (distancePoint2Blue === 160) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
              setScoreBlue(scoreBlue + 1);
            }
          } else if (scoreBlue === 5 || scoreBlue === 8 || scoreBlue === 11) {
            if (distancePoint3Blue < 160) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (distancePoint3Blue === 160) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
              setScoreBlue(scoreBlue + 1);
              setDefense("blue");
            }
          }
        } else if (fightBlue > fightRed && timeBankRed === 0) {
          if (scoreBlue > scoreRed) {
            setWinner("blue");
            setMapWinsBlue(mapWinsBlue + 1);
          } else if (scoreRed === scoreBlue) {
            if (
              (distancePoint1Blue >= distancePoint1Red &&
                distancePoint1Blue !== 0) ||
              (distancePoint2Blue >= distancePoint2Red &&
                distancePoint2Blue !== 0) ||
              (distancePoint3Blue >= distancePoint3Red &&
                distancePoint3Blue !== 0)
            ) {
              setScoreBlue(scoreBlue + 1);
              setWinner("blue");
              setMapWinsBlue(mapWinsBlue + 1);
            } else if (
              distancePoint1Red > distancePoint1Blue &&
              distancePoint1Blue < 160 &&
              timeBankBlue > 0
            ) {
              setDistancePoint1Blue(distancePoint1Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (
              distancePoint1Red > distancePoint1Blue &&
              distancePoint1Blue >= 160 &&
              timeBankBlue > 0
            ) {
              setDistancePoint1Blue(distancePoint1Blue + 80);
              setTimeBankBlue(timeBankBlue + 30);
              setScoreBlue(scoreBlue + 1);
            } else if (
              distancePoint2Red > distancePoint2Blue &&
              distancePoint2Blue < 160 &&
              timeBankBlue > 0
            ) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (
              distancePoint2Red > distancePoint2Blue &&
              distancePoint2Blue >= 160 &&
              timeBankBlue > 0
            ) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setTimeBankBlue(timeBankBlue + 30);
              setScoreBlue(scoreBlue + 1);
            } else if (
              distancePoint3Red > distancePoint3Blue &&
              distancePoint3Blue < 160 &&
              timeBankBlue > 0
            ) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (
              distancePoint3Red > distancePoint3Blue &&
              distancePoint3Blue >= 160 &&
              timeBankBlue > 0
            ) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setTimeBankBlue(timeBankBlue + 30);
              setScoreBlue(scoreBlue + 1);
              setDefense("blue");
            }
          } else if (scoreRed > scoreBlue) {
            if (
              distancePoint1Red > distancePoint1Blue &&
              distancePoint1Blue < 160
            ) {
              setDistancePoint1Blue(distancePoint1Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (
              distancePoint1Red > distancePoint1Blue &&
              distancePoint1Blue >= 160
            ) {
              setDistancePoint1Blue(distancePoint1Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
              setScoreBlue(scoreBlue + 1);
            } else if (
              distancePoint2Red > distancePoint2Blue &&
              distancePoint2Blue < 160
            ) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (
              distancePoint2Red > distancePoint2Blue &&
              distancePoint2Blue >= 160
            ) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setTimeBankBlue(timeBankBlue + 30);
              setScoreBlue(scoreBlue + 1);
            } else if (
              distancePoint3Red > distancePoint3Blue &&
              distancePoint3Blue < 160
            ) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (
              distancePoint3Red > distancePoint3Blue &&
              distancePoint3Blue >= 160
            ) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
              setScoreBlue(scoreBlue + 1);
              setDefense("blue");
            }
          }
        } else if (fightRed === fightBlue) {
          simulateEscortMap();
        }
      }
    }
  };

  return (
    <>
      {map > 1 && (
        <div>
          <p>Hybrid: </p>
          {winner === "" && (
            <>
              <p>
                {team1} : {team2}
              </p>
              <p>
                {timeBankBlue}s {scoreBlue} : {scoreRed} {timeBankRed}s
              </p>
              <p>
                Progress Point 1: {distancePoint1Blue}m : {distancePoint1Red}m
              </p>
              {scoreRed > 0 && (
                <p>
                  Progress Point 2: {distancePoint2Blue}m : {distancePoint2Red}m
                </p>
              )}
              {scoreRed > 1 && (
                <p>
                  Progress Point 3: {distancePoint3Blue}m : {distancePoint3Red}m
                </p>
              )}
              <button onClick={() => simulateEscortMap()}>
                {defense === "blue" &&
                scoreBlue === 0 &&
                scoreRed === 0 &&
                timeBankRed === 240 &&
                timeBankBlue === 240
                  ? "Start Map"
                  : "Next Fight"}
              </button>
            </>
          )}
          {winner !== "" && winner !== "draw" && (
            <>
              <p>
                {winner === "blue" ? team1 : team2} wins the Map{" "}
                {scoreBlue > scoreRed ? scoreBlue : scoreRed} :{" "}
                {scoreBlue > scoreRed ? scoreRed : scoreBlue}.
              </p>
              <button onClick={() => setMap(map + 1)}>Next Map</button>
            </>
          )}
          {winner === "draw" && (
            <>
              <p>The Map ends in a draw.</p>
              <button onClick={() => setMap(map + 1)}>Next Map</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Escort;
