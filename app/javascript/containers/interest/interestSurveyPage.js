import React, { Component } from 'react'
import Navbar from '../../components/navbar';
import styled from "styled-components";
import InterestCard from './components/interestCard';

class InterestSurveyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <Navbar/>
        <div className="interest-page-content">
          <div className="intered-category">
            <h4>selected categories</h4>
            <div className="interested-row row">
              <InterestCard interested={true}/>
            </div>
          </div>
          <div className="uninterested-category">
            <h4>sellect an interest</h4>
            <div className="interested-row row">
              {/* <InterestCard interested={false}/> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

 
export default InterestSurveyPage;