import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserAction ,deleteUserAction, getApiDataAction, updateUserAction } from "./Redux/Action";
// import { addUserAction, deleteUserAction, updateUserAction } from "/Actions";


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
      },
      users: [],
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
          {this.state.index !==null ? (
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
            <span>
              {user.fname}
              <button type="button" onClick={() => {
                this.handleEditUser(user, i);
              }} >Edit</button>
            </span>
            <span >
            <button type="button"   onClick={() => {
                deleteUserFunc(user);
              }} style={{ color: 'red', fontWeight: "bold" }}>DELETE</button>
            </span>
          </p>
        ))}
        <button onClick={this.props.getApiData()}>GET API DATA</button>
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
    getApiData : ()=> dispatch(getApiDataAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);