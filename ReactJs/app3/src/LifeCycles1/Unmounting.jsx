import React,{Component} from "react";

export class Unmounting extends Component{
    componentWillUnmount(){
        console.log("This is from ComponentWillUnmount From Unmounting")
    }
    render(){
        return(
            <h1>Iam Visible Now</h1>
        )
    }
}