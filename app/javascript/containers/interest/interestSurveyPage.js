import React, { Component } from 'react'
import Navbar from '../../components/navbar';
import styled from "styled-components";
import InterestCard from './components/interestCard';
import axios from 'axios';

class InterestSurveyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  getAllCategories = () => {
    axios.get("/api/v1/all-categories")
    .then(response => {
      this.setState({ categories: response.data })
    })
  }

  componentDidMount(){
    this.getAllCategories()
  }

  render() { 
    const { categories } = this.state;
    return (
      <div>
        <Navbar/>
        <div className="interest-page-content container">
        <h1>this is a header tag</h1>
        <p>this is sample text, this sample text, this is sample text, this is sample text, this is sample text</p>
          <div className="intered-category">
            <h4>selected categories</h4>
            <div className="interested-row row">
              { categories.map(cat => {
                return <InterestCard key={cat.id} category={cat} interested={true} />
              })}
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