import React, { Component } from "react";
import { connect } from "react-redux";
import { handle_employee } from "./Redux/Actions";

class Employee extends Component {


getdata =()=>{
    this.props.dispatch(handle_employee())
    
}
    render(){
        console.log(this.props)
        return <div>
            {this.props.employee.map((e)=>{
           return <h1>{e.email}</h1>
            })}
        <button onClick={this.getdata}>Get Employee</button>
        </div>
    }
}

function mapStateToProps(state){
    return {
        employee : state.employee
    }
}
export default connect(mapStateToProps)(Employee)