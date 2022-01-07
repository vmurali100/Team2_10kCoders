import React, { Component } from 'react';
import { connect } from 'react-redux';
import{handle_employee}from "./Redux/Actions"

class Employee extends Component {

    getDetails = ()=>{
        this.props.dispatch(handle_employee())
        console.log(this.props)
    }
    render() {
        return <div>
            
            {this.props.Employee.map((emp)=>{
                  return <h1>{emp.lname}</h1>
            })}
        </div>
            
        
    }
}
function mapStateTOProps(state){
    console.log(state)
    return{
        Employee :state.Employee
    }
    
}

export default connect(mapStateTOProps)(Employee);