import React, { Component } from 'react'
import { NormalComponentA } from './NormalComponentA'
import PureComponentA from './PureComponentA'

export default class ComponentContainerA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hi I am Parent Component "
        }
    }

    componentDidMount(){  
        setInterval(()=>{
            this.setState({message:"I am Changing"})
        },2000)
    }
    
    render() {
        return (
            <div>
                <h2>Hello, I am Parent component</h2>
                <NormalComponentA message={this.state.message}/>
                <PureComponentA message={this.state.message}/>
                
            </div>
        )
    }
}
