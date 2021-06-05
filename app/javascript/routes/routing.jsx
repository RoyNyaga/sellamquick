import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import InterestSurveyPage from "../containers/interest/interestSurveyPage";
import Homepage from "../containers/pages/homePage";
import routeLookUp from "./routeLookUp";

export default function Routing(){
  return(
    <Router>
      <Switch>
        <Route path={routeLookUp.homePage} exact component={Homepage} />
        <Route path={routeLookUp.interestSurveyPage} exact component={InterestSurveyPage} />
      </Switch>
    </Router>
  )
}