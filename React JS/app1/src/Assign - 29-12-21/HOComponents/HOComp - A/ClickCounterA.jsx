import React, { Component } from 'react'
import { HOCompA } from './HOCompA'

class ClickCounterA extends Component {
    render() {
        let{handleCount,count}=this.props
        return (
            <div><br />
                <button onClick={handleCount} style={{color:'blue'}}>Click Me</button>
                <h2 >Im incresing when u cliked on Button : {count}</h2>
            </div>
        )
    }
}
export default HOCompA(ClickCounterA)