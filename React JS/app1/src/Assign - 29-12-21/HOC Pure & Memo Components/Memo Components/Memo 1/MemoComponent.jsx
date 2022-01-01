import React, { Component } from 'react'
import FuncChild from './FuncChild'

export default class MemoComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello.. I am Parent Component..., ",
             count:1
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({count:this.state.count+1})
        },2000)
    }
    
    render() {
        return (
            <div>
                <h2>Hello From Memo Componet</h2>
                <FuncChild message={this.state.message}/>
            </div>
        )
    }
}