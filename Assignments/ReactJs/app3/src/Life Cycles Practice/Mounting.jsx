import React,{Component} from "react";
import Updating from "./Updating";
import { Unmounting } from "./Unmounting";

export default class Mounting extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        console.log("this is Constructor from rendering")
    }
    static getDerivedStateFromProps(props,state){
        console.log("This is from getDerivedFromProps of Mounting",state,props)
        return null
    }

    increment = ()=>{
        this.setState({count:this.state.count+1})
    }

    render(){
        console.log("This is Mounting Render")
        return(
            <div>
                <h1>This is Mounting Render Element</h1>
                <button onClick={this.increment}>Increment</button>
                <Updating count={this.state.count} />
                {this.state.count < 3 && <Unmounting />}
            </div>
        )
    }
    componentDidMount(){
        console.log("This is From CompenentDidMount from Mounting")
    }
}