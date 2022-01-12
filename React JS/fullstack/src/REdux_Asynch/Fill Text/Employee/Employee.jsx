import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsersAction } from './Actions'

class Employee extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllUsersFunc()}}>Get All Users</button>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        employees:state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllUsersFunc:()=>dispatch(getAllUsersAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Employee)