import React, { Component } from 'react'
import { NormalComponentE } from './NormalComponentE'
import PureComponentE from './PureComponentE'

export default class ComponentContainerE extends Component {
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
                <NormalComponentE message={this.state.message}/>
                <PureComponentE message={this.state.message}/>
            </div>
        )
    }
}
