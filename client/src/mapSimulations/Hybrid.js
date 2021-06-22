import React, { useState } from "react";
import getRandomInt from "../helpers/random";

const Hybrid = ({
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
  const [percentBlue, setPercentBlue] = useState(0);
  const [percentRed, setPercentRed] = useState(0);
  const [distancePoint2Blue, setDistancePoint2Blue] = useState(0);
  const [distancePoint2Red, setDistancePoint2Red] = useState(0);
  const [distancePoint3Blue, setDistancePoint3Blue] = useState(0);
  const [distancePoint3Red, setDistancePoint3Red] = useState(0);
  const [timeBankBlue, setTimeBankBlue] = useState(240);
  const [timeBankRed, setTimeBankRed] = useState(240);
  const [defense, setDefense] = useState("blue");

  const simulateHybridMap = () => {
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
            if (percentRed < 66) {
              setPercentRed(percentRed + 66);
              setTimeBankRed(timeBankRed - 30);
            } else if (percentRed === 66) {
              setPercentRed(100);
              setScoreRed(scoreRed + 1);
              setTimeBankRed(timeBankRed + 150);
            }
          } else if (scoreRed === 1) {
            if (distancePoint2Red < 160) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (distancePoint2Red === 160) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setScoreRed(scoreRed + 1);
              setTimeBankRed(timeBankRed + 150);
            }
          } else if (scoreRed === 2) {
            if (distancePoint3Red < 160) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (distancePoint3Red === 160) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setScoreRed(scoreRed + 1);
              setDefense("red");
              setTimeBankRed(timeBankRed - 30);
            }
          } else if (scoreRed === 3 || scoreRed === 6 || scoreRed === 9) {
            if (percentRed < 66) {
              setPercentRed(percentRed + 66);
              setTimeBankRed(timeBankRed - 30);
            } else if (percentRed === 66) {
              setPercentRed(100);
              setScoreRed(scoreRed + 1);
              setTimeBankRed(timeBankRed + 30);
            }
          } else if (scoreRed === 4 || scoreRed === 7 || scoreRed === 10) {
            if (distancePoint2Red < 160) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (distancePoint2Red === 160) {
              setDistancePoint2Red(distancePoint2Red + 80);
              setScoreRed(scoreRed + 1);
              setTimeBankRed(timeBankRed + 30);
            }
          } else if (scoreRed === 5 || scoreRed === 8 || scoreRed === 11) {
            if (distancePoint3Red < 160) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setTimeBankRed(timeBankRed - 30);
            } else if (distancePoint3Red === 160) {
              setDistancePoint3Red(distancePoint3Red + 80);
              setScoreRed(scoreRed + 1);
              setDefense("red");
              setTimeBankRed(timeBankRed - 30);
            }
          }
        } else if (fightRed > fightBlue && timeBankBlue === 0) {
          if (scoreRed > scoreBlue) {
            setWinner("red");
            setMapWinsRed(mapWinsRed + 1);
          } else if (scoreRed === scoreBlue) {
            if (
              distancePoint2Red >= distancePoint2Blue &&
              distancePoint2Red !== 0
            ) {
              setScoreRed(scoreRed + 1);
              setWinner("red");
              setMapWinsRed(mapWinsRed + 1);
            } else if (
              distancePoint3Red >= distancePoint3Blue &&
              distancePoint3Red !== 0
            ) {
              setScoreRed(scoreRed + 1);
              setWinner("red");
              setMapWinsRed(mapWinsRed + 1);
            } else if (
              (percentRed > percentBlue && percentBlue === 0) ||
              (percentRed === percentBlue && 100 > percentBlue > 0)
            ) {
              setScoreRed(scoreRed + 1);
              setWinner("red");
              setMapWinsRed(mapWinsRed + 1);
            } else if (
              percentBlue > percentRed &&
              percentRed < 66 &&
              timeBankRed > 0
            ) {
              setPercentRed(percentRed + 66);
              setTimeBankRed(timeBankRed - 30);
            } else if (
              percentBlue > percentRed &&
              percentRed >= 66 &&
              timeBankRed > 0
            ) {
              setPercentRed(100);
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
              setTimeBankRed(timeBankRed - 30);
              setScoreRed(scoreRed + 1);
            }
          } else if (scoreBlue > scoreRed) {
            if (percentBlue > percentRed && percentRed < 66) {
              setPercentRed(percentRed + 66);
              setTimeBankRed(timeBankRed - 30);
            } else if (percentBlue > percentRed && percentRed >= 66) {
              setPercentRed(100);
              setTimeBankRed(timeBankRed + 30);
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
            }
          }
        } else if (fightRed === fightBlue) {
          simulateHybridMap();
        }
      } else if (defense === "red") {
        if (fightRed > fightBlue && timeBankBlue > 0) {
          setTimeBankBlue(timeBankBlue - 30);
        } else if (fightRed > fightBlue && timeBankBlue === 0) {
          if (scoreRed > scoreBlue) {
            setWinner("red");
            setMapWinsRed(mapWinsRed + 1);
          } else if (scoreRed === scoreBlue) {
            if (distancePoint2Red > distancePoint2Blue) {
              setWinner("red");
              setMapWinsRed(mapWinsRed + 1);
            } else if (distancePoint3Red > distancePoint3Blue) {
              setWinner("red");
              setMapWinsRed(mapWinsRed + 1);
            } else if (percentBlue >= percentRed) {
              setDefense("blue");
            }
          } else if (scoreBlue > scoreRed) {
            setDefense("blue");
          }
        } else if (fightBlue > fightRed && timeBankRed === 0) {
          if (scoreBlue > scoreRed) {
            setWinner("blue");
            setMapWinsBlue(mapWinsBlue + 1);
          } else if (scoreBlue === scoreRed) {
            if (distancePoint2Blue >= distancePoint2Red) {
              setScoreBlue(scoreBlue + 1);
              setWinner("blue");
              setMapWinsBlue(mapWinsBlue + 1);
            } else if (distancePoint3Blue >= distancePoint3Red) {
              setScoreBlue(scoreBlue + 1);
              setWinner("blue");
              setMapWinsBlue(mapWinsBlue + 1);
            } else if (
              (percentBlue > percentRed && percentRed === 0) ||
              (percentBlue === percentRed && 100 > percentRed > 0)
            ) {
              setScoreBlue(scoreBlue + 1);
              setWinner("blue");
              setMapWinsBlue(mapWinsBlue + 1);
            } else if (
              percentBlue === percentRed &&
              percentRed === 0 &&
              timeBankBlue === timeBankRed &&
              timeBankRed === 0
            ) {
              setWinner("draw");
              setMapWinsBlue(mapWinsBlue + 1);
            }
          }
        } else if (fightBlue > fightRed && timeBankBlue > 0) {
          if (scoreBlue === 0) {
            if (percentBlue < 66) {
              setPercentBlue(percentBlue + 66);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (percentBlue === 66) {
              setPercentBlue(100);
              setScoreBlue(scoreBlue + 1);
              setTimeBankBlue(timeBankBlue + 150);
            }
          } else if (scoreBlue === 1) {
            if (distancePoint2Blue < 160) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (distancePoint2Blue === 160) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setScoreBlue(scoreBlue + 1);
              setTimeBankBlue(timeBankBlue + 150);
            }
          } else if (scoreBlue === 2) {
            if (distancePoint3Blue < 160) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (distancePoint3Blue === 160) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setScoreBlue(scoreBlue + 1);
              setTimeBankBlue(timeBankBlue - 30);
              if (timeBankBlue > timeBankRed) {
                setDefense("blue");
              } else {
                setDefense("red");
              }
              setPercentBlue(0);
              setPercentRed(0);
              setDistancePoint2Blue(0);
              setDistancePoint2Red(0);
              setDistancePoint3Blue(0);
              setDistancePoint3Red(0);
            }
          } else if (scoreBlue === 3 || scoreBlue === 6 || scoreBlue === 9) {
            if (percentBlue < 66) {
              setPercentBlue(percentBlue + 66);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (percentBlue === 66) {
              setPercentBlue(100);
              setScoreBlue(scoreBlue + 1);
              setTimeBankBlue(timeBankBlue + 30);
            }
          } else if (scoreBlue === 4 || scoreBlue === 7 || scoreBlue === 10) {
            if (distancePoint2Blue < 160) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (distancePoint2Blue === 160) {
              setDistancePoint2Blue(distancePoint2Blue + 80);
              setScoreBlue(scoreBlue + 1);
              setTimeBankBlue(timeBankBlue + 30);
            } else if (
              timeBankBlue === 0 &&
              distancePoint2Blue < 240 &&
              timeBankRed !== 0
            ) {
              setDefense("blue");
            }
          } else if (scoreBlue === 5 || scoreBlue === 8 || scoreBlue === 11) {
            if (distancePoint3Blue < 160) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setTimeBankBlue(timeBankBlue - 30);
            } else if (distancePoint3Blue === 160) {
              setDistancePoint3Blue(distancePoint3Blue + 80);
              setScoreBlue(scoreBlue + 1);
              setTimeBankBlue(timeBankBlue - 30);
              if (timeBankBlue > timeBankRed && scoreBlue >= scoreRed) {
                setDefense("blue");
              } else {
                setDefense("red");
              }
              if (scoreBlue >= scoreRed) {
                setPercentBlue(0);
                setPercentRed(0);
                setDistancePoint2Blue(0);
                setDistancePoint2Red(0);
                setDistancePoint3Blue(0);
                setDistancePoint3Red(0);
              }
            }
          }
        } else if (fightBlue === fightRed) {
          simulateHybridMap();
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
                Progress Point 1: {percentBlue}% : {percentRed}%
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
              <button onClick={() => simulateHybridMap()}>
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

export default Hybrid;
