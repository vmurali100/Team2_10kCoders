import React, { Component } from 'react'
import FunctionB from './FunctionB'

export default class MemoB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello.. I am MemoB Component..., ",
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
                <FunctionB message={this.state.message}/>
            </div>
        )
    }
}