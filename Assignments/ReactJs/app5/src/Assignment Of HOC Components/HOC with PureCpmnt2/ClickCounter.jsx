import React, { Component,PureComponent } from 'react'
import HOCComponent from './HOCComponent'

class ClickCounter extends PureComponent {
    render() {
        console.log("******ClickCounter3 Rendering*******")
        const {count,incrementCounter} = this.props
        return (
            <div>
                <button onClick={incrementCounter}>Clicked {count} Times in Component3</button>
            </div>
        )
    }
}
export default HOCComponent(ClickCounter)
