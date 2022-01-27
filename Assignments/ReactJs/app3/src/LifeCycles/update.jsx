import React,{Component} from "react";

export class Child extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("This is From child getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(){
        console.log("I am from shouldComponentUpdate - from ChildComp")
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("I am from getSnapshotBeforeUpdate - from ChildComp")
        return null
    }

    componentDidUpdate(){
        console.log("I am from componentDidUpdate - from ChildComp")
    }

    render(){
        console.log("Iam from Child Class Render")
        return(
            <div>
                <h1>My name is Child{this.props.count}</h1>
            </div>
        )
    }
}