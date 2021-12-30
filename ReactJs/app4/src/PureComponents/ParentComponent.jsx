import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

export default class ParentComponent extends Component {
    constructor(props){
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
        console.log("*******Parent Component**********")
        return (
            <div>
                <h1>PURE COMPONENTS PRACTICE</h1>
                Parent Component
                <RegularComponent name={this.state.name} />  
                <PureComp name={this.state.name}/>   
            </div>
        )
    }
}
