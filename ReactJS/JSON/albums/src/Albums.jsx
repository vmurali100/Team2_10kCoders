import React, { Component } from "react";
import { connect } from "react-redux";

class Albums extends Component {
 
  render() {
    return (
      <div>
        {this.props.albums.map((e) => {
          return (
            <h1 key={e.id}>
              {e.title} <button onClick={this.deleteUser}>Delete</button>
            </h1>
          );
        })}
        <br />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};
export default connect(mapStateToProps)(Albums);
