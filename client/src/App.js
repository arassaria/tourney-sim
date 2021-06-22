import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Control from "./mapSimulations/Control";
import Hybrid from "./mapSimulations/Hybrid";
import Assault from "./mapSimulations/Assault";
import Escort from "./mapSimulations/Escort";

function App() {
  let team1 = "HSR Panthera";
  let team2 = "Bayern Apex";
  let playersTeam1 = [
    { name: "Skyhawk", role: "Maintank", rating: 56 },
    { name: "Arassaria", role: "Offtank", rating: 58 },
    { name: "FallInSleep", role: "HitscanDPS", rating: 45 },
    { name: "YeQiu", role: "FlexDPS", rating: 44 },
    { name: "Phdale", role: "MainSupport", rating: 43 },
    { name: "Kaijeo", role: "FlexSupport", rating: 41 },
  ];
  let playersTeam2 = [
    { name: "SouLEater", role: "Maintank", rating: 42 },
    { name: "Lucario", role: "Offtank", rating: 57 },
    { name: "Zflo", role: "HitscanDPS", rating: 58 },
    { name: "Palcom", role: "FlexDPS", rating: 46 },
    { name: "Amacariel", role: "MainSupport", rating: 45 },
    { name: "Nairo", role: "FlexSupport", rating: 55 },
  ];
  let strengthBlue = 48;
  let strengthRed = 51;
  const [map, setMap] = useState(1);
  const [mapWinsBlue, setMapWinsBlue] = useState(0);
  const [mapWinsRed, setMapWinsRed] = useState(0);

  useEffect(() => {
    if (mapWinsBlue === 3 || mapWinsRed === 3) {
      setMap(0);
    }
  }, [mapWinsBlue, mapWinsRed]);

  return (
    <div className="App">
      <Router>
        <h1>Overwatch Match Simulation</h1>
        <p>
          {team1} {mapWinsBlue} : {mapWinsRed} {team2}
        </p>
        <p>Map {map}</p>
        <Link to="/">Home</Link>
        {map === 0 && <Link to="/result">Result</Link>}
        {map >= 1 && <Link to="/map1">Map 1: Control</Link>}
        {map >= 2 && <Link to="/map2">Map 2: Hybrid</Link>}
        {map >= 3 && <Link to="/map3">Map 3: Assault</Link>}
        {map >= 4 && <Link to="/map4">Map 4: Escort</Link>}
        {map >= 5 && <Link to="/map5">Map 5: Control</Link>}
        {map >= 6 && <Link to="/map6">Map 6: Control</Link>}
        {map >= 7 && <Link to="/map7">Map 7: Control</Link>}
        {map >= 8 && <Link to="/map8">Map 8: Control</Link>}
        {map >= 9 && <Link to="/map9">Map 9: Control</Link>}
        <Switch>
          <Route path="/result">
            {mapWinsBlue > mapWinsRed ? team1 : team2} beats{" "}
            {mapWinsBlue > mapWinsRed ? team2 : team1} with{" "}
            {mapWinsBlue > mapWinsRed ? mapWinsBlue : mapWinsRed} :{" "}
            {mapWinsBlue > mapWinsRed ? mapWinsRed : mapWinsBlue}
          </Route>
          <Route path="/map1">
            {Control({
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
            })}
          </Route>
          <Route path="/map2">
            {Hybrid({
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
            })}
          </Route>
          <Route path="/map3">
            {Assault({
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
            })}
          </Route>
          <Route path="/map4">
            {Escort({
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
            })}
          </Route>
          <Route path="/map5">
            {Control({
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
            })}
          </Route>
          <Route path="/map6">
            {Control({
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
            })}
          </Route>
          <Route path="/map7">
            {Control({
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
            })}
          </Route>
          <Route path="/map8">
            {Control({
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
            })}
          </Route>
          <Route path="/map9">
            {Control({
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
            })}
          </Route>
          <Route path="/">
            <p>
              Today's Match: {team1} : {team2}
            </p>
            <table>
              <thead>
                <tr>
                  <td>
                    <h3>{team1}</h3>
                  </td>
                </tr>
              </thead>
              <tbody>
                {playersTeam1.map((player) => (
                  <tr>
                    <td>{player.role}</td>
                    <td>{player.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <td>
                    <h3>{team2}</h3>
                  </td>
                </tr>
              </thead>
              <tbody>
                {playersTeam2.map((player) => (
                  <tr>
                    <td>{player.role}</td>
                    <td>{player.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
