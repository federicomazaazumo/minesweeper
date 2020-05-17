import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import GameBoard from "../../screens/GameBoard";
import React from "react";
import ScoreBoard from "../../screens/ScoreBoard";
import StartScreen from "../../screens/StartScreen";

const NavigationRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route component={StartScreen} exact path="/" />
          <Route component={GameBoard} exact path="/gameboard" />
          <Route component={ScoreBoard} exact path="/scoreboard" />
        </Switch>
      </>
    </Router>
  );
};

export default NavigationRouter;
