import React, { Component,PureComponent } from 'react'
import UpdatedComponent from './HOCComponent'

class ClickCounter1 extends PureComponent {
    render() {
        console.log("*****ClickCounter Rendering********")
        const {count,incrementCounter} = this.props
        
        return (
            <div>
               <button onClick={incrementCounter}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter1)
