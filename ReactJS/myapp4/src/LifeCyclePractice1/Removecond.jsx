import React , { Component } from "react";

export default class Removecond extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillUnmount(){
      return alert("this will be from the count")
    }
     render(){
         return <div>
             <h1>am here to be removed </h1>
         </div>
     }
}
