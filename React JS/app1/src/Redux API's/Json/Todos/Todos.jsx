import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todos extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Todos Title</h3>
                {this.props.todos.map((com) => {
                    return <p key={com.title}>{com.title}</p>
                })}

            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        todos : state.todos
    }
}
export default connect(mapStateToProp)(Todos)