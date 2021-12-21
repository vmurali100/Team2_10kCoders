import  React , { Component } from "react";

export default class Newclass2 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
return <div>
    <h1>{this.props.color}</h1>
</div>
    }
}