import React, { Component } from 'react'
import { HOCComp } from './HOC.Comp'



 class ClickCounter extends Component {
  render() {
      let  { handleCount, Count } = this.props
    return (
      <div>
        <button onClick={handleCount}>Click Me</button>
        <h1>Srikanth Clicked { Count } times</h1>
      </div>
    )
  }
}
export default HOCComp(ClickCounter)
