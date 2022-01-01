import React, { Component } from 'react'

export default class ClickCounter2 extends Component {
    render() {
        const {count,incrementCounter}  = this.props
        return (
            <div>
              <button onClick={incrementCounter}>You clicked {count} Times</button>  
            </div>
        )
    }
}
