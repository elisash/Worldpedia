import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Highscore from "../pages/Highscore";
import GameList from "../pages/GameList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route exact path="/game">
            <GameList user={user} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/highscores">
            <Highscore />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
