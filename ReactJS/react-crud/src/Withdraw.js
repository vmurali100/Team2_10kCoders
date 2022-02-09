import React, { Component } from 'react'

export default class Withdraw extends Component {
    state={
      sno :'',
      name:'',
      ifsc:'',
      amount:''
    }
    handleinput = (e)=>{
        this.setState({
             [e.target.name] : e.target.value
        })
    }
    handlesubmit = (e)=>{
        e.preventDefault()
        this.props.onAddorEdit(this.state)
    }
  render() {
    return (
     <form autoComplete='off' onSubmit={this.handlesubmit}>
      <input name="sno" placeholder='sno' value={this.state.sno} onChange={this.handleinput}/><br/>
      <input name="name" placeholder='name' value={this.state.name} onChange={this.handleinput}/><br/>
      <input name="ifsc" placeholder='ifsc' value={this.state.ifsc} onChange={this.handleinput}/><br/>
      <input name="amount" placeholder='amount' value={this.state.amount} onChange={this.handleinput}/><br/>
      <button type="submit">Submit</button>
     </form>
    )
  }
}
