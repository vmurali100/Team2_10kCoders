import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUserDetailsAction } from "./redux/actions";

class Users extends Component {

    handleUserDetails=()=>
    {
        this.props.dispatch(getAllUserDetailsAction());
    }
    render(props) {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.handleUserDetails}>Get User Details</button>
            </div>)
    }
}

function mapStateToProps(state)
{
    return {
        users : state
    }
}

export default connect(mapStateToProps)(Users);