import React, { Component } from "react";
import {
  MDBCard,
  MDBCardTitle,
//   MDBBtn,
//   MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

export class Card extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         dataTag = '',


    //     };
    // }
  render() {
    return (
      <>
        {/* <MDBRow> */}
          <MDBCol md="4" style={style} key={this.props.CardInfo.key}>
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
                height: "auto",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className="pink-text">
                    <MDBIcon icon="chart-pie" /> {this.props.CardInfo.key}
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>{this.props.CardInfo.title}</strong>
                  </MDBCardTitle>
                  <p>{this.props.CardInfo.description}</p>
                  {/* <MDBBtn color="pink">
                    <MDBIcon icon="clone left" /> View project
                  </MDBBtn> */}
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        {/* </MDBRow> */}
      </>
    );
  }
}

export default Card;

const style = {
  padding: "20px",
};
