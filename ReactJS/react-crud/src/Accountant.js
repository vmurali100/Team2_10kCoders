import React, { Component } from 'react'
import Withdraw from './Withdraw'

class Accountant extends Component {
    state={
        list:this.returnlist()
    }
    returnlist(){
        if(localStorage.getItem('Details') ==  null)
        localStorage.setItem('Details',JSON.stringify([]))
        return JSON.parse(localStorage.getItem('Details'))
    }
    onAddorEdit = (data)=>{
        var list = this.returnlist()
        list.push(data)
        localStorage.setItem('Details',JSON.stringify(list))
        this.setState({list})
    }
  render() {
    return (
      <div>
        <h1>hello from Accountant Component</h1>
        <Withdraw onAddorEdit={this.onAddorEdit}/>
        <hr/>
        <p>List of Transactions</p>
      </div>
    )
  }
}
export default Accountant