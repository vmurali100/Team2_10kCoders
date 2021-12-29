import React, { Component } from 'react'
import { NormalComponent } from './NormalComponent'
import PureComp from './PureComp'

export default class ComponentsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello.. Normal Component .... How Are you ?",
             count:1
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({message:"Im Changing this msg"})
        },2000)
    }
    
    render() {
        return (
            <div>
                <h2>Hello From Container Component</h2>
                <NormalComponent message={this.state.message} /> 
                <PureComp message={this.state.message}/>
            </div>
        )
    }
}