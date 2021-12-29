import React, { Component } from 'react'
import { HOCompA } from './HOCompA';

class HoverCounterA extends Component {
    render() {
        let {handleCount,count}=this.props;
        return (
            <div>
                <h2 onMouseMove={handleCount}>When u move mouse on me im Capturing : {count}</h2>
            </div>
        )
    }
}
export default HOCompA(HoverCounterA)