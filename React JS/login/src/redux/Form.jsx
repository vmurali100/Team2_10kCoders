import React, { Component } from "react";
import { connect } from "react-redux";
// import {getData} from './Actions';
import { getAllUsersAction } from "./Actions/actions";

// import { useNavigate } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
    };
    console.log(props);

  }
  handleClick = (e) => {
    let newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.createUser(this.state.user);
    this.handleClear();
    console.log(this.state.user);
    // navigate("/userdetails");

  };
  handleClear = () => {
    let newUser = {
      email: "",
      password: "",
    };
    this.setState({ user: newUser });
  };
  render() {
    return (
      <div className="continer" ><br/>
      <div> <h2 style={{textAlign:"center"}}>Login</h2></div>
       <div className="row">
         <div className="col"></div>
         <div className="col" style={{background:"pink",borderTop:"10px"}}>
           <form>
             <div className="mb-3"  style={{background:"pink",borderTop:"10px"}}>
               <label className="form-label">Email address</label>
               <input
                 type="email"
                 className="form-control"
                 name="email"
                 placeholder="*email"
                 value={this.state.user.email}
                 onChange={this.handleClick}
               />
             </div>
             <div className="mb-3">
               <label className="form-label">Password</label>
               <input
                 type="password"
                 className="form-control"
                 name="password"
                 placeholder="*password"
                 value={this.state.user.password}
                 onChange={this.handleClick}
               />
             </div>

             <button
               type="submit"
               className="btn btn-primary"
               onClick={this.handleSubmit}
               style={{marginBottom:"30px"}}
             >
               Login
             </button>
           </form>
         </div>
         <div className="col"></div>
       </div>
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
  };
}
        export default connect(mapStateToProps, mapDispatchToProps)(Form);
