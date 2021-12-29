import React, { Component } from 'react'
import { HOComponentB } from './HOComponentB'

class HoverCountB extends Component {
    render() {
        let{handleCount,count}=this.props
        return (
            <div>
                <h2 onMouseOver={handleCount}>Im increasing when u hover on me : {count}</h2>
            </div>
        )
    }
}
export default HOComponentB(HoverCountB)