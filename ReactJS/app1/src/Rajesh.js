import { Component } from "react";

export default class Rajesh extends Component{
    constructor(props){
        super()
    }
    render(){
        return <div>
            <h3 style={{color:"red"}}>{this.props.message}</h3>
            <h3>{this.props.WelcomeReact}</h3>
        </div>
    }
}