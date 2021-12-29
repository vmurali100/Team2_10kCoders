import React, { Component } from 'react'
import { NormalComponentC } from './NormalComponentC'
import PureComponentC from './PureComponentC'

export default class ComponentContainerC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message:"Hey I am Parent Component"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({message:"Hi im Parent Component"})
        },2000)
    }
    render() {
        return (
            <div>
                <h2>Hey I am Parent Component</h2>
                <NormalComponentC message={this.state.message}/>
                <PureComponentC message={this.state.message}/>
            </div>
        )
    }
}
