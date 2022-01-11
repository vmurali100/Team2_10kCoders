import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             student:{studentname:" "},
             students:[{studentname:"Teja"},{studentname:"Satish"}],
             index:null
        }
    }

    handleClear = ()=>{
        this.setState({student:{studentname:" "}})
    }

    handleChange =(e)=>{
        let newStudent = {...this.state.student}
        newStudent[e.target.name] = e.target.value
        this.setState({student:newStudent})
    }

    handleAddStudent = ()=>{
        let AllStudents = [...this.state.students]
        AllStudents.push(this.state.student)
        this.setState({students:AllStudents})
        this.handleClear()
    }
    
    handleEditUser = (student,i)=>{
        this.setState({student,index:i})
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='studentname'>Enter Student Name:</label>
                    <input type="text" name="studentname" value={this.state.student.studentname}
                    onChange={(e)=>{this.handleChange(e)}} />
                    {this.state.index?(<button type='button' onClick={this.handleUpdate}>UpdateUser</button>):
                    (<button onClick={this.handleAddStudent} type='button'>AddUser</button>)}
                </form>
                <hr/>
                {this.state.students.map((student,i)=>(
                    <p key={i}>
                        <span onClick={()=>{this.handleEditUser(student,i)}} >{student.studentname}</span>
                        <span onClick={()=>{this.handleDeleteUser(student)}}></span>
                    </p>
                ))}
               
            </div>
        )
    }
}
