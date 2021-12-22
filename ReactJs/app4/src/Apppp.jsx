import {Component} from "react";
import Appppp from "./Appppp";

export class Apppp extends Component{
    constructor(){
      super()
    this.state={
      message:"welcome to apppp component",
      welcomeMsg:"helloo welcome"
    }
  }
  render(){
     return <div>
       <button onClick={()=>{this.setState({message:"hello....."})}}>change message</button>
       <h2>{this.state.message}</h2>
       {/* <Appppp msg={this.state.message}
       welc={this.state.welcomeMsg}/> */}
       <Appppp {...this.state}/>
</div>
  }
}













