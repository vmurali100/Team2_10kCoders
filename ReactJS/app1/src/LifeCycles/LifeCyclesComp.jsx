import React, { Component } from "react";
import LifeCyclesCompB from "./LifeCyclesCompB";

export default class LifeCyclesComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            count :1
        }
    }
    changeCount = ()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
              <h2>Hello,From React LifeCycles Parent Component</h2>
              <button onClick={this.changeCount}>Change Count</button>
              <LifeCyclesCompB count={this.state.count} />
            </div>
        )
    }
}