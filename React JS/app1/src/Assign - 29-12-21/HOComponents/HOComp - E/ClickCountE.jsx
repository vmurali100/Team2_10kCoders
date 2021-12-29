import React, { Component } from 'react'
import { HOComponentE } from './HOCompE';

class ClickCountE extends Component {
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
export default HOComponentE(ClickCountE)