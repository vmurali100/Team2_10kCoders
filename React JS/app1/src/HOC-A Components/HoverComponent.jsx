import React, { Component } from 'react'

export default class ClickCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    handleCount =()=>{
        this.setState({count:this.state.count+1})
    }

    render() {
        return (
            <div>
                <h2 onMouseOver={this.handleCount}><span style={{ color: 'red' }}>You Hovered On me : </span>{this.state.count}</h2>
            </div>
        )
    }
}

