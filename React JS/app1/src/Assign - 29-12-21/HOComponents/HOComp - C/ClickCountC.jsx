import React, { Component } from 'react'
import { HOComponentC } from './HOComponentC';

class ClickCountC extends Component {
    render() {
        let{handleCount,count}=this.props;
        return (
            <div>
                <button onClick={handleCount}>Click</button>
                <h2>Im Increased when u clik on me : {count}</h2>
            </div>
        )
    }
}
export default HOComponentC(ClickCountC)