import { Component } from "react";
import React from "react";
import Teacher from "./Teacher";

export default class Student extends Component{
    constructor(){
        super()
        this.state={
            mes:"hello"
        }
    }
        render(){
            return(
                <div>
                    <button onClick={()=>{this.setState({mes:"i have changed"})}}>button</button>
                    <h1>Hello , i am Srikanth</h1>
                        <Teacher m={this.state.mes}/>
                </div>
            )
        }
          
    }
        
    
        




