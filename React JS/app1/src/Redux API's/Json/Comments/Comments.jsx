import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comments extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Comments Name</h3>
                {this.props.comments.map((com) => {
                    return <p key={com.name}>{com.name}</p>
                })}

            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        comments : state.comments
    }
}
export default connect(mapStateToProp)(Comments)