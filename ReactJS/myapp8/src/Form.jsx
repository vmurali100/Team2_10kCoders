import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserAction, getUserAction } from "./Redux/Action";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
      },
    };
    console.log(props)
  }
  
  handleChange = (e) => {
    console.log(e.target.value);
    let newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
   
  };
  adduser = (e) => {
    this.props.creatUser(this.state.user);
    console.log(this.state.user);
    let newUser
    newUser[e.target.value] = ""  ;
    this.setState({user : newUser})
    
  };
 
  getuser =() =>{
    this.props.getUsers()
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">FirstName</label>
          <input
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <label htmlFor="lname">LastName</label>
          <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
          /> <br />
          <button type="button" onClick={this.adduser}>ADD USER</button>
        </form>
        {this.props.users && this.props.users.map((user)=>{
          return <li>{user.fname}</li>
        })}
        <button onClick={this.getuser}>GET USER</button>
        
      </div>
    );
  }
}

const MSTP = (state) => {
  return {
    users: state,
  };
};

const MDTP = (dispatch) => {
  return {
    getUsers : ()=>{dispatch(getUserAction())} ,
    creatUser: (user) => {
      dispatch(addUserAction(user));
    },
  };
};

export default connect(MSTP,MDTP)(Form);
