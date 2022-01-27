import React, { Component } from 'react'

export default class Reference1 extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <h1>Assignment2</h1>
                <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}
