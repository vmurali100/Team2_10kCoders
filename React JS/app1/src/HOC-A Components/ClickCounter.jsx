import React, { Component } from 'react'

export default class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    handleClick =()=>{
        this.setState({count:this.state.count+1})

    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Get Increased</button>
                <h2><span style={{color:'blue'}}>Im increased : </span>{this.state.count}</h2>
            </div>
        )
    }
}

