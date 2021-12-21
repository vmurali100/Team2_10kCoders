import React, { Component } from "react";

export class Lifecycle2 extends Component{
    constructor(props){
    super(props)
        // this.state = {

        // }

    }
    render(){
        return <div>
            <p>{this.props.std}</p>
        </div>
    }
}