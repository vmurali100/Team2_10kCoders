import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
 
  render() {
    return (
      <div>
        {this.props.comments.map((e) => {
          return (
            <h4 key={e.id}>
              {e.body} <button onClick={this.deleteUser}>Delete</button>
            </h4>
          );
        })}
        <br />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};
export default connect(mapStateToProps)(Comments);
