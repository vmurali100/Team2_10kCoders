import React, { Component } from 'react'

export default class Reference2 extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.inputRef1 = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        this.inputRef1.current.focus()
    }
    render() {
        return (
            <div>
                <h2>Assignment 2.1</h2>
                <h3>When We give two or more focus it will focus on the Last</h3>
                <input type = "text" ref={this.inputRef} />
                <input type= "text" ref ={this.inputRef1} />
            </div>
        )
    }
}
