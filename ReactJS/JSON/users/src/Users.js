import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
 
  render() {
    return (
      <div>
        {this.props.users.map((e) => {
          return (
            <h1 key={e.id}>
              {e.email} <button onClick={this.deleteUser}>Delete</button>
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
    users: state.users,
  };
};
export default connect(mapStateToProps)(User);
