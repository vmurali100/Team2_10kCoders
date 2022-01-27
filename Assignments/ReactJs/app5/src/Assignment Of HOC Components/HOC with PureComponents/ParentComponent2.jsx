import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default class ParentComponent2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"teja"
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"Teja"})
        },2000  )
    }
    render() {
        console.log("********Parent Component2 Rendering********")
        return (
            <div>
                <h1>This is Second Component</h1>
                <ClickCounter />
                <HoverCounter />
            </div>
        )
    }
}
