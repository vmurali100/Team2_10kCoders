import React, { Component } from 'react'

export default class HoverCounter extends Component {
    constructor(props){
        super(props)
        this.state ={
            count:0
        }
    }
    incrementCount =()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <button onMouseOver={this.incrementCount}><h3> Hovered {count} times </h3></button>
            </div>
        )
    }
}
