import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUserAction, getAllUserAction } from './Actions'

class Users extends Component {

    getAllUsers = () => {
        this.props.dispatch(getAllUserAction())
    }

    deleteUser = () => {
        this.props.dispatch(deleteUserAction())
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Hello From Users Component</h3>
                <button onClick={this.getAllUsers}>Get Data</button> &nbsp;
                <button onClick={this.deleteUser}>Delete Data</button>
                {this.props.users.map((user) => {
                    return <p key={user}>{user}</p>
                })}
            </div>
        )
    }
}


function MapStateToProps(state) {
    return {
        users: state
    }
}

export default connect(MapStateToProps)(Users)