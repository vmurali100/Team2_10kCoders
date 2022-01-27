import React, { Component } from 'react'
import UpdatedComponet from "./HOCComponent"
class ClickCounter extends Component {
    render() {
        const {count,incrementCounter} = this.props
        return (
            <div>
                <button onClick={incrementCounter}>clicked {count} Times </button>
            </div>
        )
    }
}
export default UpdatedComponet(ClickCounter)