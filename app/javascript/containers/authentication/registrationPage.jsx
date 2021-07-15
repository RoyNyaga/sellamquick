import React, { Component } from "react";
import RegistrationForm from "./components/registrationForm";

function RegistrationPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
