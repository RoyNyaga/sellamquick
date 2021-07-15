import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Navbar from "../../components/navbar";
import InterestCard from "./components/interestCard";

class InterestSurveyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  // componentDidMount() {
  //   this.getAllCategories();
  // }

  // getAllCategories() {
  //   axios.get("/api/v1/all-categories")
  //     .then((response) => {
  //       this.setState({ categories: response.data });
  //     });
  // }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <Navbar />
        <div className="interest-page-content container">
          <h2 className="general-header-fonts-normal my-5 text-center">Tell us more about the type of products you are interested in</h2>
          <div className="intered-category">
            <h4 className="general-header-fonts-normal my-5 text-center">Your interest</h4>
            <div className="interested-row row">
              { categories.map((cat) => <InterestCard key={cat.id} category={cat} interested />)}
            </div>
          </div>
          <div className="uninterested-category">
            <h4 className="general-header-fonts-normal my-5 text-center">Categories you may be interested in</h4>
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
