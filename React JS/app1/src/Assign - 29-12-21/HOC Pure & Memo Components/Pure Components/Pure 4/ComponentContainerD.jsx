import React, { Component } from 'react'
import { NormalComponentD } from './NormalComponentD'
import PureComponentD from './PureComponentD'

export default class ComponentContainerD extends Component {
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
                <NormalComponentD message={this.state.message}/>
                <PureComponentD message={this.state.message}/>
            </div>
        )
    }
}
