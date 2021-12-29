import React, { Component } from 'react'
import { HOComponentD } from './HOCompD';

class HoverCountD extends Component {
    render() {
        let{handleCount,count}=this.props;
        return (
           <h2 onMouseMove={handleCount}>Mouse Move on me Im increased : {count}</h2>
        )
    }
}

export default HOComponentD(HoverCountD)