import React, { Component } from "react";
import { connect } from "react-redux";

class Photos extends Component {
 
  render() {
    return (
      <div>
        {this.props.photos.map((e) => {
          return (
            <h1 key={e.id}>
              <img src={e.url} alt="" width="200px"  height="200px"/> <button onClick={this.deleteUser}>Delete</button>
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
    photos: state.photos,
  };
};
export default connect(mapStateToProps)(Photos);
