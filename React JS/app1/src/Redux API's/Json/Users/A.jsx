import React, { Component } from 'react'
import { connect } from 'react-redux'

class A extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Users Name</h3>
                {this.props.users.map((com) => {
                    return <p key={com.name}>{com.name}</p>
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
export default connect(mapStateToProp)(A)