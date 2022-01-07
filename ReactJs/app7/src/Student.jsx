import React, { Component } from 'react'
import {connect} from "react-redux"
import {getStudentAction, getUsersAction} from "./Redux/action.js"

class Student extends Component {
    getStudentDetails=()=>{
        this.props.dispatch( getStudentAction())
        console.log(this.props.students)
    }
   
    render() {
        
        return (
            <div>
                <h2>HellO from Students</h2>
                <button onClick={this.getStudentDetails}>GET STUDENTS</button>
                {this.props.students && this.props.students.map((std)=>{
                   for(var a in std){
                       return <p>{std.address}</p>
                   }
                })}
               
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        students:state.students
    }
}

export default connect(mapStateToProps)(Student)
