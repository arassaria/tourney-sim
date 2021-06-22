import React, { useState } from "react";
import getRandomInt from "../helpers/random";

const Assault = ({
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
  const [percent1Blue, setPercent1Blue] = useState(0);
  const [percent1Red, setPercent1Red] = useState(0);
  const [percent2Blue, setPercent2Blue] = useState(0);
  const [percent2Red, setPercent2Red] = useState(0);
  const [timeBankBlue, setTimeBankBlue] = useState(240);
  const [timeBankRed, setTimeBankRed] = useState(240);
  const [defense, setDefense] = useState("blue");

  const simulateAssaultMap = () => {
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
            if (percent1Red < 66) {
              let captureRandom = getRandomInt(3);
              if (captureRandom === 1) {
                setPercent1Red(percent1Red + 33);
                setTimeBankRed(timeBankRed - 30);
              } else if (captureRandom === 2) {
                setPercent1Red(percent1Red + 66);
                setTimeBankRed(timeBankRed - 30);
              } else if (captureRandom === 3) {
                setPercent1Red(100);
                setScoreRed(scoreRed + 1);
                setTimeBankRed(timeBankRed + 150);
              }
            } else if (percent1Red >= 66) {
              setPercent1Red(100);
              setScoreRed(scoreRed + 1);
              setTimeBankRed(timeBankRed + 150);
            }
          } else if (scoreRed === 1) {
            if (percent2Red < 66) {
              let captureRandom = getRandomInt(3);
              if (captureRandom === 1) {
                setPercent2Red(percent2Red + 33);
                setTimeBankRed(timeBankRed - 30);
              } else if (captureRandom === 2) {
                setPercent2Red(percent2Red + 66);
                setTimeBankRed(timeBankRed - 30);
              } else if (captureRandom === 3) {
                setPercent2Red(100);
                setScoreRed(scoreRed + 1);
                setTimeBankRed(timeBankRed - 30);
                setDefense("red");
              }
            } else if (percent2Red >= 66) {
              setPercent2Red(100);
              setScoreRed(scoreRed + 1);
              setTimeBankRed(timeBankRed - 30);
              setDefense("red");
            }
          } else if (scoreRed === 2 || scoreRed === 4 || scoreRed === 6) {
            if (percent1Red < 66) {
              let captureRandom = getRandomInt(3);
              if (captureRandom === 1) {
                setPercent1Red(percent1Red + 33);
                setTimeBankRed(timeBankRed - 30);
              } else if (captureRandom === 2) {
                setPercent1Red(percent1Red + 66);
                setTimeBankRed(timeBankRed - 30);
              } else if (captureRandom === 3) {
                setPercent1Red(100);
                setScoreRed(scoreRed + 1);
                setTimeBankRed(timeBankRed + 150);
              }
            } else if (percent1Red >= 66) {
              setPercent1Red(100);
              setScoreRed(scoreRed + 1);
              setTimeBankRed(timeBankRed + 30);
            }
          } else if (scoreRed === 3 || scoreRed === 5 || scoreRed === 7) {
            if (percent2Red < 66) {
              let captureRandom = getRandomInt(3);
              if (captureRandom === 1) {
                setPercent2Red(percent2Red + 33);
                setTimeBankRed(timeBankRed - 30);
              } else if (captureRandom === 2) {
                setPercent2Red(percent2Red + 66);
                setTimeBankRed(timeBankRed - 30);
              } else if (captureRandom === 3) {
                setPercent2Red(100);
                setScoreRed(scoreRed + 1);
                setTimeBankRed(timeBankRed - 30);
                setDefense("red");
              }
            } else if (percent2Red >= 66) {
              setPercent2Red(100);
              setScoreRed(scoreRed + 1);
              setTimeBankRed(timeBankRed - 30);
              setDefense("red");
            }
          }
        } else if (fightRed > fightBlue && timeBankBlue === 0) {
          if (scoreRed > scoreBlue) {
            setWinner("red");
            setMapWinsRed(mapWinsRed + 1);
          } else if (
            (percent1Red > percent1Blue && percent1Blue === 0) ||
            (percent1Red >= percent1Blue && 100 > percent1Blue > 0)
          ) {
            setScoreRed(scoreRed + 1);
            setWinner("red");
            setMapWinsRed(mapWinsRed + 1);
          } else if (
            (percent2Red > percent2Blue && percent2Blue === 0) ||
            (percent2Red >= percent2Blue && 100 > percent2Blue > 0)
          ) {
            setScoreRed(scoreRed + 1);
            setWinner("red");
            setMapWinsRed(mapWinsRed + 1);
          }
        } else if (fightRed === fightBlue) {
          simulateAssaultMap();
        }
      } else if (defense === "red") {
        if (fightRed > fightBlue && timeBankBlue > 0) {
          setTimeBankBlue(timeBankBlue - 30);
        } else if (fightRed > fightBlue && timeBankBlue === 0) {
          if (scoreRed > scoreBlue) {
            setWinner("red");
            setMapWinsRed(mapWinsRed + 1);
          } else if (scoreRed === scoreBlue) {
            if (percent1Red > percent1Blue) {
              setScoreRed(scoreRed + 1);
              setWinner("red");
              setMapWinsRed(mapWinsRed + 1);
            } else if (percent2Red > percent2Blue) {
              setScoreRed(scoreRed + 1);
              setWinner("red");
              setMapWinsRed(mapWinsRed + 1);
            }
          }
        } else if (fightBlue > fightRed && timeBankRed === 0) {
          if (scoreBlue > scoreRed) {
            setWinner("blue");
            setMapWinsBlue(mapWinsBlue + 1);
          } else if (
            (percent1Blue > percent1Red && percent1Red === 0) ||
            (percent1Blue >= percent1Red && 100 > percent1Red > 0)
          ) {
            setScoreBlue(scoreBlue + 1);
            setWinner("blue");
            setMapWinsBlue(mapWinsBlue + 1);
          } else if (
            (percent2Blue > percent2Red && percent2Red === 0) ||
            (percent2Blue >= percent2Red && 100 > percent2Red > 0)
          ) {
            setScoreBlue(scoreBlue + 1);
            setWinner("blue");
            setMapWinsBlue(mapWinsBlue + 1);
          }
        } else if (
          fightBlue > fightRed &&
          timeBankBlue > 0 &&
          timeBankRed > 0
        ) {
          if (scoreBlue === 0) {
            if (percent1Blue < 66) {
              let captureRandom = getRandomInt(3);
              if (captureRandom === 1) {
                setPercent1Blue(percent1Blue + 33);
                setTimeBankBlue(timeBankBlue - 30);
              } else if (captureRandom === 2) {
                setPercent1Blue(percent1Blue + 66);
                setTimeBankBlue(timeBankBlue - 30);
              } else if (captureRandom === 3) {
                setPercent1Blue(100);
                setScoreBlue(scoreBlue + 1);
                setTimeBankBlue(timeBankBlue + 150);
              }
            } else if (percent1Blue >= 66) {
              setPercent1Blue(100);
              setScoreBlue(scoreBlue + 1);
              setTimeBankBlue(timeBankBlue + 150);
            }
          } else if (scoreBlue === 1) {
            if (percent2Blue < 66) {
              let captureRandom = getRandomInt(3);
              if (captureRandom === 1) {
                setPercent2Blue(percent2Blue + 33);
                setTimeBankBlue(timeBankBlue - 30);
              } else if (captureRandom === 2) {
                setPercent2Blue(percent2Blue + 66);
                setTimeBankBlue(timeBankBlue - 30);
              } else if (captureRandom === 3) {
                setPercent2Blue(100);
                setScoreBlue(scoreBlue + 1);
                setTimeBankBlue(timeBankBlue - 30);
                setDefense("blue");
                if (timeBankBlue > timeBankRed) {
                  setDefense("blue");
                } else {
                  setDefense("red");
                }
                setPercent1Blue(0);
                setPercent1Red(0);
                setPercent2Blue(0);
                setPercent2Red(0);
              }
            } else if (percent2Blue >= 66) {
              setPercent2Blue(100);
              setScoreBlue(scoreBlue + 1);
              setTimeBankBlue(timeBankBlue - 30);
              setDefense("blue");
              if (timeBankBlue > timeBankRed) {
                setDefense("blue");
              } else {
                setDefense("red");
              }
              setPercent1Blue(0);
              setPercent1Red(0);
              setPercent2Blue(0);
              setPercent2Red(0);
            }
          } else if (scoreBlue === 2 || scoreBlue === 4 || scoreBlue === 6) {
            if (percent1Blue < 66) {
              let captureRandom = getRandomInt(3);
              if (captureRandom === 1) {
                setPercent1Blue(percent1Blue + 33);
                setTimeBankBlue(timeBankBlue - 30);
              } else if (captureRandom === 2) {
                setPercent1Blue(percent1Blue + 66);
                setTimeBankBlue(timeBankBlue - 30);
              } else if (captureRandom === 3) {
                setPercent1Blue(100);
                setScoreBlue(scoreBlue + 1);
                setTimeBankBlue(timeBankBlue + 150);
              }
            } else if (percent1Blue >= 66) {
              setPercent1Blue(100);
              setScoreBlue(scoreBlue + 1);
              setTimeBankBlue(timeBankBlue + 30);
            }
          } else if (scoreRed === 3 || scoreRed === 5 || scoreRed === 7) {
            if (percent2Blue < 66) {
              let captureRandom = getRandomInt(3);
              if (captureRandom === 1) {
                setPercent2Blue(percent2Blue + 33);
                setTimeBankBlue(timeBankBlue - 30);
              } else if (captureRandom === 2) {
                setPercent2Blue(percent2Blue + 66);
                setTimeBankBlue(timeBankBlue - 30);
              } else if (captureRandom === 3) {
                setPercent2Blue(100);
                setScoreBlue(scoreBlue + 1);
                setTimeBankBlue(timeBankBlue - 30);
                setDefense("blue");
                if (timeBankBlue > timeBankRed) {
                  setDefense("blue");
                } else {
                  setDefense("red");
                }
                setPercent1Blue(0);
                setPercent1Red(0);
                setPercent2Blue(0);
                setPercent2Red(0);
              }
            } else if (percent2Blue >= 66) {
              setPercent2Blue(100);
              setScoreBlue(scoreBlue + 1);
              setTimeBankBlue(timeBankBlue - 30);
              setDefense("blue");
              if (timeBankBlue > timeBankRed) {
                setDefense("blue");
              } else {
                setDefense("red");
              }
              setPercent1Blue(0);
              setPercent1Red(0);
              setPercent2Blue(0);
              setPercent2Red(0);
            }
          }
        } else if (fightBlue === fightRed) {
          simulateAssaultMap();
        }
      }
    }
  };

  return (
    <>
      {map > 2 && (
        <div>
          <p>Assault:</p>
          {winner === "" && (
            <>
              <p>
                {team1} : {team2}
              </p>
              <p>
                {timeBankBlue}s {scoreBlue} : {scoreRed} {timeBankRed}s
              </p>
              <p>
                Progress Point 1: {percent1Blue}% : {percent1Red}%
              </p>
              {scoreRed > 0 && (
                <p>
                  Progress Point 2: {percent2Blue}% : {percent2Red}%
                </p>
              )}
              <button onClick={() => simulateAssaultMap()}>
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

export default Assault;
