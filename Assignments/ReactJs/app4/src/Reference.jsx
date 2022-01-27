import React, { Component } from 'react'

export default class Reference extends Component {
    constructor(props){
        super(props) 
        this.inputRef = null
        this.cbcInputRef = (element)=>{
            this.inputRef = element
        }
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
}
