import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserAction, deleteUserAction, updateUserAction } from "../Actions";


class Users_Redux extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
      },
      users: [{ fname: "Hari" }, { fname: "Giri" }, { fname: "Sohail" }],
      index: null,
    };
    console.log(props);
  }

  handleChange = (e) => {
    let newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };
  handleClear = () => {
    this.setState({
      user: {
        fname: "",
      },
      index: null
    });
  };

  handleEditUser = (user, i) => {
    this.setState({ user, index: i });
  };

  handleUpdate = () => {
    let updatedUser = { ...this.state.user };
    updatedUser['id'] = this.state.index;
    this.props.updateUserFunc(updatedUser)
    this.handleClear();
  };

  render() {
    const { addUserFunc, deleteUserFunc, updateUserFunc } = this.props;
    return (
      <div>
        <h2>Hello From Users Component</h2>

        <form>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            name="fname"
            value={this.state.user.fname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          {this.state.index ? (
            <button type="button" onClick={this.handleUpdate}>
              Update User
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                addUserFunc(this.state.user);
                this.handleClear()
              }}
            >
              Add User
            </button>
          )}
        </form>
        <hr />
        {this.props.users.map((user, i) => (
          <p key={i}>
            <span onClick={() => { this.handleEditUser(user, i); }}> {user.fname} </span>{" "}   -{" "}
            <span  onClick={() => { deleteUserFunc(user); }} style={{ color: 'red', fontWeight: "bold" }} > {" "}X{" "} </span>
          </p>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    users: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUserFunc: (user) => dispatch(addUserAction(user)),
    deleteUserFunc: (user) => dispatch(deleteUserAction(user)),
    updateUserFunc: (user) => dispatch(updateUserAction(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users_Redux);
