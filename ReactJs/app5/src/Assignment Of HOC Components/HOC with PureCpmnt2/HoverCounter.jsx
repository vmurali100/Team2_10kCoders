import React, { Component,PureComponent } from 'react'
import HOCComponent from './HOCComponent'

 class HoverCounter extends PureComponent {
    render() {
        console.log("*****HoverCounter Component3 Rendering******")
        const {count,incrementCounter} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCounter}>You Have Hovered {count} Times</h2>
            </div>
        )
    }
}
export default HOCComponent(HoverCounter)
