import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Posts Body</h3>
                {this.props.post.map((p) => {
                    return <p key={p.body}>{p.body}</p>
                })}

            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        post : state.post
    }
}
export default connect(mapStateToProp)(Posts)