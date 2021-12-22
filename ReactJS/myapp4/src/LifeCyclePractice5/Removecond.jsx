import React , { Component } from "react";

export default class Removecond extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillUnmount(){
      return window.alert("text is removing")
    }
     render(){
         return <div>
             <h1> this is removed after 4 </h1>
         </div>
     }
}
