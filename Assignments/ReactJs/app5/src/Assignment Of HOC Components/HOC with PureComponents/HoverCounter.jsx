import React, { Component,PureComponent } from 'react'
import UpdatedComponent from '../HOCComponent'

class HoverCounter extends PureComponent {
    render() {
        console.log("******HoverComponent2 Rendering*********")
        const {count,incrementCounter} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCounter}>You Hovered {count} Times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
