import { Component } from "react";
import Greeting from "./Greeting";

export class Harish extends Component{
    constructor(){
        super()
        this.state={
            message :"Welcome to Harish Component",
            welcomeMsg:"Hello 10K Team .. Welcome to ReactJS Training ",
            user:"welcome to class component"
        }
        
    }

    render(){
        return <div>
            <button onClick={()=>{this.setState({message:"Hello Harish.. I have Changed"})}}>Change Message</button>
           
            {/* <Greeting 
            msg={this.state.message}
            welc={this.state.welcomeMsg}/> */}
            <button onClick={()=>{this.setState({user:"peoples"})}}>users</button>
            <Greeting {...this.state}/>
        </div>
    }
}