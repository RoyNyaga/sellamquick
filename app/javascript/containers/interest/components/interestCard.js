import React from 'react';
import styled from "styled-components";
import ImgOne from "../../../assets/one.png"

const InterestCard = (props) => {

  const toggleDisappear  = (event) => {
    const how = document.querySelector("#how")
    const button = how.childNodes[0].childNodes[1];
    console.log(button.classList.toggle("disappear"))
  }

  const displayType = () =>{
    return props.interested ? <div className="check-box-div display-button">✅</div> 
        :
        <div className="check-box-div display-button disappear">✅</div>
  }

  return (
    <Wrapper className="col-6 col-md-3 col-lg-2" id="how">
      <div className="card-content bg-shadow-white-color" onClick={toggleDisappear}>
        <img src={ImgOne} alt="missing-photo"/>
        { displayType() }
        <div className="card-footer d-flex justify-content-between align-items-center py-0 px-1">
          <p>I-Phones</p><p className="number bg-dark-color">2</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`

  .number{
    padding: 10px;
    color: orange;
    border-radius: 50%;
  }
  .card-content{
    position: relative;
  }
  img{
    width: 100%;
  }

  .disappear{
    display: none;
  }

  .check-box-div{
    position: absolute;
    font-size: 3em;
    bottom: 40%;
    left: 38%;
  }
`
 
export default InterestCard;