import React,{ Component } from "react";

export default class LifeCyclesCompB extends Component{
    constructor(props){
        super(props)
        console.log("Hello, Construtor Comp-B")
    }
    render(){
        console.log("Hello, Construtor Render-B")
        return(
            <div>
                <h2>Hello,From React ComponentB-{this.props.count}</h2>
            </div>
        )
    }
}