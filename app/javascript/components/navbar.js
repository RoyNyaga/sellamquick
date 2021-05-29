import React from 'react';
import styled from "styled-components"

const Navbar = () => {
  return (
  <div>
    <span>Home</span>
    <span>About</span>
    <span>Account</span>
    <span>Services</span>

  </div>
  );
}

const NavWrapper = styled.div`
  padding: 10px;
  background: black;
  display: flex;
  color: white;
`
 
export default Navbar;