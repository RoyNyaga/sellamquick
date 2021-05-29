import React from 'react';
import styled from "styled-components"

const Navbar = () => {
  return (
  <NavWrapper>
    <span>Home</span>
    <span>About</span>
    <span>Account</span>
    <span>Services</span>
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