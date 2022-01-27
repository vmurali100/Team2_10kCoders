import React, { Component } from 'react'

export default class HoverCounter extends Component {
    render() {
        const {count,incrementCounter} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCounter}>Hovered {count} Times</h2>
            </div>
        )
    }
}
