import React, { Component } from "react";
import Student from "./Student";
export default class Teacher extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
      render(){
         return(
             <div>
                 <h3>{this.props.m}</h3>
             </div>
         )
      }
    }
    
