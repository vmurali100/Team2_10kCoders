import React, { Component } from 'react'
import { HOCComp } from './HOC.Comp'

 class HoverCounter extends Component {
  render() {
    let { handleCount,Count } = this.props
    return (
      <div>
      <h1 onMouseOver={handleCount}>You Hovered {Count} times</h1>
      </div>
    )
  }
}
export default HOCComp(HoverCounter);