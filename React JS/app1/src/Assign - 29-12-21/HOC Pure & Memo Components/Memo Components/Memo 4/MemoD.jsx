import React, { Component } from 'react'
import FunctionD from './FunctionD'

export default class MemoD extends Component {
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
                <h2>Hello From MemoD Componet</h2>
                <FunctionD message={this.state.message}/>
            </div>
        )
    }
}