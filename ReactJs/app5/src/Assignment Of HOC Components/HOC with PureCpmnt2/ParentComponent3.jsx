import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default class ParentComponent3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Teja"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"Teja"})
        },2000)
    }

    render() {
        console.log("*****Parent Component3 Rendering *******")
        return (
            <div>
                <h1>This is Third Component</h1>
                <ClickCounter />
                <HoverCounter />
            </div>
        )
    }
}
