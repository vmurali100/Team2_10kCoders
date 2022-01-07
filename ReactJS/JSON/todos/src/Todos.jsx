import React, { Component } from "react";
import { connect } from "react-redux";

class Todos extends Component {
 
  render() {
    return (
      <div>
        {this.props.todos.map((e) => {
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
    todos: state.todos,
  };
};
export default connect(mapStateToProps)(Todos);
