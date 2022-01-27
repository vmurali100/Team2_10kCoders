import React,{Component} from "react";
import { Child } from "./update";
import Unmounting from "./Unmounting";

export default class LifeCycleComp extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
        console.log("This is from Constructor")
    }
    static getDerivedStateFromProps(state,props){
        console.log("This is from getDerived States",state,props)
        return null
    }

    increment = ()=>{
        this.setState({count:this.state.count+1})
    }

    render(){
        console.log("This is from rendering block")
        return(
            <div>
                <h1>My Name is Teja</h1>
                <button onClick={this.increment}>increment</button>
                <Child count={this.state.count} />
                {this.state.count < 3 && <Unmounting />}
            </div>
            )
    }

    componentDidMount(){
        console.log("iam from ComponentDidMiount")
    }
}