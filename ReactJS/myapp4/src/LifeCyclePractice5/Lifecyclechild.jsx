import { Component } from "react";


export default class Lifecyclechild extends Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    render(){
        return <div style={{}}>
            <h1>{"COUNTDOWN" + this.props.count}</h1>
        </div>
    }
}