import React from 'react';
import styled from "styled-components"

const Navbar = () => {
  return (
  <NavWrapper>
    <span className="nav-links">Home</span>
    <span className="nav-links">About</span>
    <span className="nav-links">Account</span>
    <span className="nav-links">Services</span>
  </NavWrapper>
  );
}

const NavWrapper = styled.div`
  padding: 10px;
  background-color: #333333;
  display: flex;
  color: white;
  justify-content: space-between;
`
 
export default Navbar;