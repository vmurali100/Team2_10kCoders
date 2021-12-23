import { Component } from "react";

export default class Thanusha extends Component{
    constructor(props){
        super()
    }
render(){
    return<div>     
   <h3 style={{color:"red"}}>{this.props.message}</h3>
        <h4>{this.props.Flank}</h4>
    </div>
}
}