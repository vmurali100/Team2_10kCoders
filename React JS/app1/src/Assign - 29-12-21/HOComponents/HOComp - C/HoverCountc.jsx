import React, { Component } from 'react'
import { HOComponentC } from './HOComponentC';

class HoverCountc extends Component {
    render() {
        let{handleCount,count}=this.props;
        return (
           <h2 onMouseMove={handleCount}>Mouse Move on me Im increased : {count}</h2>
        )
    }
}

export default HOComponentC(HoverCountc)