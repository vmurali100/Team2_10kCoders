import React, { Component } from 'react'
import FunctionE from './FunctionE'

export default class MemoE extends Component {
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
                <h2>Hello From MemoE Componet</h2>
                <FunctionE message={this.state.message}/>
            </div>
        )
    }
}