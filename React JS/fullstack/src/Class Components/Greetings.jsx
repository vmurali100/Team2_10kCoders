import { Component } from "react";

export default class Greetings extends Component{
    constructor(props){
        super()
    }
    render(){
        return <div>
            <h3>{this.props.msg}</h3>
        </div>
    }
}
