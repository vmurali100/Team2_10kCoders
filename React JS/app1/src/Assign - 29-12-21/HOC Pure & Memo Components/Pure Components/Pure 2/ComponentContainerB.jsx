import React, { Component } from 'react'
import { NormalComponentB } from './NormalComponentB'
import PureComponentB from './PureComponentB'

export default class ComponentContainerB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hey I am Parent Component"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({message:"Hey I am Parent Component and I am Pure Method"})
        },2000)
    }
    
    render() {
        return (
            <div>
                <h2>Hey I am Parent Component</h2>
                <NormalComponentB message={this.state.message}/>
                <PureComponentB message={this.state.message}/>
            </div>
        )
    }
}
