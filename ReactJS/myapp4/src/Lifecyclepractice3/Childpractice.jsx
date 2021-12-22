import React ,{ Component } from "react";
import Practice from "./Practice";

export default  class Child extends  Component{
    constructor (props){
        super(props)
        this.state = {

        }
    }
    render(){
        return <div>
             {this.props.value.map((num)=>{
             return <h1>{num}</h1>
         })}
        </div>
    }
}