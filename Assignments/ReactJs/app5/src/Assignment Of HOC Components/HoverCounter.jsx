import React, { Component,PureComponent } from 'react'
import UpdatedComponent from './HOCComponent'

class HoverCounter extends PureComponent {
   
    render() {
        console.log("*******Hover Counter Rendering***********")
        const {count,incrementCounter} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCounter}>Hovered {count} no.of Times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
