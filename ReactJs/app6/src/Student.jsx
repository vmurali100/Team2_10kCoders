import React, { Component } from 'react'
import { connect } from 'react-redux'
import{ getAllStudents} from "./Redux/actions"
import{ deleteStudent} from "./Redux/actions"
let students1 = null
export class Student extends Component {
    getStudentDetails = ()=>{
        this.props.dispatch(getAllStudents())
            students1 = this.props.students.students
            console.log(this.props)
           console.log(students1)
           
    }   
     deleteStudent1 = (std)=>{
       this.props.dispatch(deleteStudent(std))
       
     }

    render() {
        console.log("Rendering",this.props)
        return (
            <div>
                <button onClick={this.getStudentDetails}> Get Students</button>
                
                <h1>{(students1 !== null)?students1.map((std)=>{
                    return <p key={std} onClick={()=>{
                        this.deleteStudent1(std)
                    }}>{std}</p>
                }):"Please Click the Button To get Data" }</h1>
                {students1 = null}
                {/* <button onClick={this.deleteStudent1}>DELETE Students</button> */}
            
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        students:state
    }
}

export default connect(mapStateToProps)(Student)
