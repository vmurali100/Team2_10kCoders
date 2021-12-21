import { Component } from "react";


export default class Lifecyclechild extends Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    render(){
        return <div style={{}}>
            <h1>{"15k41A0" + this.props.count}</h1>
        </div>
    }
}