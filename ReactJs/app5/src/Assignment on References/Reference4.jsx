import React, { Component } from 'react'

export default class Reference4 extends Component {
    constructor(props) {
        super(props)
    
        this.cbRef = null
        this.setcbRef = element => {
            this.cbRef = element
        }
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <h2>Assignmnet 2.3</h2>
                <input type="text" ref={this.setcbRef} />
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}
