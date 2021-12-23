import React, { Component } from 'react'
import ChildComp from './ChildComp'
import ConditionComponent from './ConditionComponent'

export default class LifeCycleCompB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    increase=()=>{
        this.setState({count:this.state.count+1})
        
    }
    render() {
   
        return (
            <div>
                <button onClick={this.increase}>Increase Count</button>
                <ChildComp count={this.state.count}/>
                <hr />
                {this.state.count < 3 && <ConditionComponent/>}
            </div>
        )
    }
}