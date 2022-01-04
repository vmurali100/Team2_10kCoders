import React, { Component } from 'react'
import { connect } from 'react-redux'

class Teacher extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>TeacherComponent</h2>
                {this.props.teachers.map((std)=>{
                    return <p key={std}>{std}</p>
                })}
            </div>
        )
    }
}

function mapToStateRernderProps(state){
    return{
        teachers : state.teachers
    }
}
export default connect(mapToStateRernderProps)(Teacher)