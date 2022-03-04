import React, { Component } from 'react'
import Welcome from './Welcome'

class GreetingComponent extends Component {
    constructor(){
        super()
        this.state = {
            name:"Teja"
        }
    }
    handleBtn(){
        this.setState({
            name:"Nani"
        })
    }
  render() {
    return (
      <div><h1>My name is {this.state.name}</h1>
      <button onClick={()=>{this.handleBtn()}}>New Data</button>
      <Welcome state1={this.state} ></Welcome>
      </div>
    )
  }
}

export default GreetingComponent