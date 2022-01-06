import React, { Component } from 'react'
import { connect } from 'react-redux'

class Student extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.students.map((std)=>{
                    return <p key={std}>{std}</p>
                })} <hr />

            </div>
        )
    }
}

function mapStateToProp(state){
    return {
       students : state.students
    }
}

export default connect(mapStateToProp)(Student)