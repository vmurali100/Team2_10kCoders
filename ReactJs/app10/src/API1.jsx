import React, { Component } from 'react'
import { connect } from 'react-redux'

export class API1 extends Component {
   
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.students.map((std)=>{
                    return <p key={std.username}>{std.username}</p>
                })}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        students:state.api1data
    }
}
export default connect(mapStateToProps)(API1)
