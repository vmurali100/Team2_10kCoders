import React,{Component} from "react";
import { Updating } from "./Updating";
import { Unmounting } from "./Unmounting";
 
export default class Mounting extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
        console.log("this is fropm Constructor Mounting")
    }

    static getDerivedStateFromProps(props,state){
        console.log("This is getDerivedStateFromProps of Mounting",props,state)
        return null
    }

    componentDidMount(){
        console.log("this is from Component Did Mouint")
    }

    increment = ()=>{
        this.setState({count:this.state.count+1})
    }

    render(){
        console.log("This is Render from Mounting")
        return(
            <div>
                <h2>This is Mounting Phase</h2>
                <button onClick={this.increment}>Increment</button>
                <Updating count={this.state.count}/>
                {this.state.count < 3 && <Unmounting />}
            </div>
        )
    }
}