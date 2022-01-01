import React, { Component } from 'react'

export default class Reference3 extends Component {
    constructor(props){
        super(props)
        this.cbRef = null
        this.setcbRef = element => {
            this.cbRef =element
        }
    }
    render() {
        return (
            <div>
                <h2>Assignment 2.2 (CallBackReferences)</h2>
              <input type="text" ref={this.setcbRef} />  
            </div>
        )
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
}
