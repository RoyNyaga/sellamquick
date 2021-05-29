import React from 'react';
import styled from "styled-components";
import ImgOne from "../../../assets/one.png"

const InterestCard = (props) => {

  const toggleDisappear  = (event) => {
    // event.target.classList.toggle("disappear")
    const how = document.querySelector("#how")
    // how.classList.toggle("disappear")
    const button = how.childNodes[0].childNodes[2];
    console.log(button.classList.toggle("disappear"))
    // button.classList.toggle("disappear");
    // console.log("it has been triggered");
  }

  const displayType = () =>{
    return props.interested ? <div className="color-div display-button">✅</div> 
        :
        <div className="color-div display-button disappear">✅</div>
  }

  return (
    <Wrapper className="col-md-2" id="how">
      <div className="card-content" onClick={toggleDisappear}>
        <h4>I-phones</h4>
        <img src={ImgOne} alt="missing-photo"/>
        { displayType() }
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .card-content{
    position: relative;
  }
  img{
    width: 100%;
  }

  .disappear{
    display: none;
  }

  .color-div{
    position: absolute;
    font-size: 4em;
    bottom: 40%;
    left: 20%;
  }
`
 
export default InterestCard;