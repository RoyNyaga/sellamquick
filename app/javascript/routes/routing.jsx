import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import InterestSurveyPage from "../containers/interest/interestSurveyPage";
import Homepage from "../containers/pages/homePage";

export default function Routing(){
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/user-interest-survey" exact component={InterestSurveyPage} />
      </Switch>
    </Router>
  )
}