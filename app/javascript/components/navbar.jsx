import React from "react";
import styled from "styled-components";
import {
  Link,
} from "react-router-dom";
import routeLookUp from "../routes/routeLookUp";

const Navbar = () => (
  <NavWrapper>
    <div className="navbar-links">
      <Link to={routeLookUp.homePage}>Home page</Link>
      <Link to={routeLookUp.signUpPage}>Sign Up</Link>
      <Link to={routeLookUp.interestSurveyPage}>Interest</Link>
    </div>
  </NavWrapper>
);

const NavWrapper = styled.div`
  .navbar-links{
    padding: 10px;
    background-color: #333333;
    display: flex;
    color: white;
    justify-content: space-between;
  }
`;

export default Navbar;
