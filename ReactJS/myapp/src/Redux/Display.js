import React, { Component } from "react";
import { CricketData } from "./Actions";
import { Football } from "./Actions";
import { connect } from "react-redux";

class Display extends Component {
  getCricket = () => {
    this.props.dispatch(Football());
    this.props.dispatch(CricketData());
    console.log(this.props.games)

    document.getElementById("cric").style.display = "none"
    document.getElementById("foot").style.display = "block"
    
   
  };

  render() {
    console.log(this.props.games);
    return (
      <div>
         <div id="cric">
            {this.props.games.cricket.map((e) => {
          return <li>{e}</li>;
        })}
        <hr />
        <button onClick={this.getCricket}>Get Cricket</button>
      </div>
      
        <div id="foot" >
        {this.props.games.football.map((e) => {
          return <h1>{e}</h1>;
        })}
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    games: state,
  };
}
export default connect(mapStateToProps)(Display);
