import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createUserAction,
  deleteUserAction,
  getAllUsersAction,
} from "./Action";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
      },
    };
    console.log(props);
  }
  handleChange = (e) => {
    let newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });

  };
  handleClear = () => {
    let newUser = {
      fname: "Ram",
      lname: "",
      email: "",
    };
    this.setState({ user: newUser });
  };
  hanldeCreate = () => {
    this.props.createUser(this.state.user);
    this.handleClear()
  };
  editUser = () => {};
  updateUser = () => {};
  getAllUsersDetails = () => {
    this.props.dispatch(getAllUsersAction());
  };
  handleDelete = (user) => {
    this.props.deleteUser(user);
  };
  handleEdit=(user)=>{
    this.setState({user})
  }

  render() {
    return (
      <div>
        <h2>Redux Crud</h2>
        <form>
          <label htmlFor="fname">First Name :</label>
          <input
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="fname">Last Name :</label>
          <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="fname">Email :</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <button type="button" onClick={this.hanldeCreate}>
            Add User
          </button>
        </form>
        <br />
       
        {this.props.users &&
          this.props.users.map((user, i) => {
            return <p key={i}>{user.fname} - 
            <button onClick={()=>{this.handleEdit(user)}}>Edit User</button> 
            <button onClick={()=>{
              this.handleDelete(user)
            }}>Delete User</button></p>;
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(getAllUsersAction()),
    deleteUser: (user) => dispatch(deleteUserAction(user)),
    createUser: (user) => dispatch(createUserAction(user)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);