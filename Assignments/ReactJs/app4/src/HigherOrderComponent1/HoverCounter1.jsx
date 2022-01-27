import React, { Component } from 'react'
import UpdatedComponent from './HOCComponent'

class HoverCounter1 extends Component {
    render() {
        const {count,incrementCounter} = this.props
        return (
            <div>
               <h2 onMouseOver={incrementCounter}>Hovered On this line {count} times</h2> 
            </div>
        )
    }
}
export default UpdatedComponent(HoverCounter1)
