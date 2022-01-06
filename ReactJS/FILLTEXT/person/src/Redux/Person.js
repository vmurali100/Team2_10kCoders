import React, { Component } from "react";
import { connect } from "react-redux";
import getPerson from "./Action";

class Person extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

//   static getDerivedStateFromProps(props,state) {
//     this.props.dispatch(getPerson());
//     console.log("getderievd " , props ,state)
//     return null 
//   }


  render() {
    this.props.dispatch(getPerson())
    console.log(this.props);
    return (
      <div>
        <div>
          {this.props.person.map((e) => {
            return <h1 key={e.fname}>{e.address}</h1>;
          })}
        </div>
        {/* <button onClick={this.getDataOfPerson()}>Get Person</button> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    person: state.personDetails,
  };
};

export default connect(mapStateToProps)(Person);
