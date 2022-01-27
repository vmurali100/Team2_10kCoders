import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getData} from './Actions';
import {getAllUsersAction} from './Actions/actions'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                uname: "",
                password: "",
            },
        };
        console.log(props);
    }
    handleClick = e => {
        let newUser = { ...this.state.user };
        newUser[e.target.name] = e.target.value;
        this.setState({ user: newUser });
    }
    handleSubmit = e => {
        e.preventDefault();
        // this.props.createUser(this.state.user);
        this.handleClear();
        
        

    }
    handleClear = () => {
        let newUser = {
          uname: "",
          password: "",
        };
        this.setState({ user: newUser });
      };
    render() {
        return (
            <div>
                <h1 style={{color:'blue',fontStyle:'italic'}}>Login</h1>
                <center>
                    <form>
                        

                        <label>User Name</label>
                        <input type="text" name='uname' placeholder='User Name' value={this.state.user.uname} onChange={this.handleClick} /><br />

                        <label>Password</label>
                        <input type="password" name='password' placeholder='Password' value={this.state.user.password} onChange={this.handleClick} /><br />

                        <button type="button" onClick={this.handleSubmit}><Link to={`/form/${userdetails}`}> Submit</Link></button>
           
       
                    </form>
                </center>

            </div>
        )
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