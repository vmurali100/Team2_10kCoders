import React, { Component } from 'react'
import { HOComponentE } from './HOCompE';

class HoverCountE extends Component {
    render() {
        let{handleCount,count}=this.props;
        return (
           <h2 onMouseMove={handleCount}>Mouse Move on me Im increased : {count}</h2>
        )
    }
}

export default HOComponentE(HoverCountE)