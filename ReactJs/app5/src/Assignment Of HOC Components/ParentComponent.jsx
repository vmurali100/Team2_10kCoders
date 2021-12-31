import React, { Component } from 'react'
import ClickCounter1 from './ClickCounter1'
import HoverCounter from './HoverCounter'

export default class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:"Teja"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"Teja"})
        },2000)
    }
    render() {
        console.log("****Parent Component Rendering******")
        return (
            <div>
                <h1>This is FirstComponent</h1>
                <ClickCounter1 />
                <HoverCounter />
            </div>
        )
    }
}
