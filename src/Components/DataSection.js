import React, { Component } from "react";
import {
    MDBRow,
  } from "mdbreact";

import Card from "./Card";

export class DataSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonName: [
        "Safety",
        "HealthData",
        "Science",
        "News",
        "COVID19",
        "Virus",
        "Doctors",
      ],
      buttonNewNames: []
    };
  }
  // updateSearch(event) {
  //     const buttonNewNames = this.state.buttonName.filter(button => {
  //         return button === event.target.dataTag
  //     })
  //     this.setState({
  //         buttonName: [...buttonNewNames]
  //       })
  //     this.props.onChange(event.target.dataTag)
  // }
  createLiItem = () => {
    let UL = [];

    for (let i = 0; i < this.state.buttonName.length; i++) {
      UL.push(
        <li type='button'
          className="filter__item"
          style={styleLi}
          key={this.state.buttonName[i]}
          dataTag={this.state.buttonName[i]}
          // onCLick={this.updateSearch(this.dataTag)}
        >
          {this.state.buttonName[i]}
        </li>
      );
    }
    return UL;
  };
  render() {
    return (
      <div>
        <a name="list"></a>
        <h2 className="section__title text-center" style={styleH2}>
          The List
        </h2>
        <div className="text-center">
          <ul className="filters list-unstyled list-inline">
            {this.createLiItem()}
          </ul>
        </div>
        <MDBRow>
          <Card
            CardInfo={{
              key: "Safety",
              title: "This is a card Title",
              description:
                "This is a brief description of what the article is about",
            }}
          />
          <Card
            CardInfo={{
              key: "HealthData",
              title: "This is a card Title",
              description:
                "This is a brief description of what the article is about",
            }}
          />
          <Card
            CardInfo={{
              key: "Science",
              title: "This is a card Title",
              description:
                "This is a brief description of what the article is about",
            }}
          />
          <Card
            CardInfo={{
              key: "News",
              title: "This is a card Title",
              description:
                "This is a brief description of what the article is about",
            }}
          />
          <Card
            CardInfo={{
              key: "COVID19",
              title: "This is a card Title",
              description:
                "This is a brief description of what the article is about",
            }}
          />
          <Card
            CardInfo={{
              key: "Virus",
              title: "This is a card Title",
              description:
                "This is a brief description of what the article is about",
            }}
          />
          <Card
            CardInfo={{
              key: "Doctors",
              title: "This is a card Title",
              description:
                "This is a brief description of what the article is about",
            }}
          />
        </MDBRow>
      </div>
    );
  }
}

export default DataSection;

const styleH2 = {
  fontSize: "2.145em",
  lineHeight: "1.3",
  fontWeight: "bold",
  padding: "70px 0 0 0",
};
const styleLi = {
  display: "inline-block",
  margin: "10px",
  padding: "7px 14px",
  lineHeight: "1",
  borderRadius: "50px",
  cursor: "pointer",
  minWidth: "55px",
  background: "0 0",
  textAlign: "center",
  border: "2px solid #362c2c",
};
