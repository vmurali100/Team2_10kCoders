import React, { Component } from 'react'

export default class Reference extends Component {
    constructor(){
        super()
        this.inputRef = React.createRef()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
    componentDidMount(){
        this.inputRef.focus()
    }
}
