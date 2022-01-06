import React, { Component } from 'react'
import { connect } from 'react-redux'
import getData from './Action'

class Employee extends Component {
    // getdata =()=>{
    //     this.props.dispatch(getData())
        
    // }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.emp.map((employee)=>{
                  return  <p key={employee.email}>{employee.email}</p>
                  
                })}
                        {/* <button onClick={this.getdata}>Get Employee</button> */}

                
            </div>
        )
    }
}
 const mapStateToProp=(state)=>{
     return{
         emp : state.emp
     }
 }
export default connect(mapStateToProp)(Employee)