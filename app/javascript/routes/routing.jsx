import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import RegistrationPage from "../containers/authentication/registrationPage";
import InterestSurveyPage from "../containers/interest/interestSurveyPage";
import Homepage from "../containers/pages/homePage";
import routeLookUp from "./routeLookUp";

export default function Routing() {
  return (
    <Switch>
      <Route path={routeLookUp.homePage} exact component={Homepage} />
      <Route path={routeLookUp.interestSurveyPage} exact component={InterestSurveyPage} />
      <Route path={routeLookUp.signUpPage} exact component={RegistrationPage} />
    </Switch>
  );
}
