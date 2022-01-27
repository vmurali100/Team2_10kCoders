import React, { Component } from 'react'

export default class HoverCounter1 extends Component {
    render() {
        const {count,incrementCounter} = this.props
        return (
            <div>
                <h3 onMouseOver={incrementCounter}>Hovered {count} Times</h3>
            </div>
        )
    }
}
