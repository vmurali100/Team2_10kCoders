import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>User UserNames</h3>
                {this.props.users.map((use) => {
                    return <p key={use.username}>{use.username}</p>
                })}

            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        users : state.users
    }
}
export default connect(mapStateToProp)(Users)