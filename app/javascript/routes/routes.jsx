import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Test from "../components/Test";
import InterestSurveyPage from "../containers/interest/interestSurveyPage";

export default function Routing(){
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user-interest-survey" exact component={InterestSurveyPage} />
      </Switch>
    </Router>
  )
}