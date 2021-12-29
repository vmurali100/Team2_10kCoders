import React, { Component } from 'react'
import { HOComponentB } from './HOComponentB'

class ClickCountB extends Component {
    render() {
        let{handleCount,count}=this.props;                      
        return (
            <div><br />
                <button onClick={handleCount} style={{color:'red'}}> Click Me</button>
                <h2>When u click im Increased : {count}</h2>
                
            </div>
        )
    }
}
export default HOComponentB(ClickCountB)