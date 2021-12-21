import React , { Component } from "react";
import Newclass2 from "./Lifecyclechild";

export default class Myclass extends  Component{
    constructor (props){
        super(props);
        this.state ={
            colour : "red" ,
            
        }
    }
    static getDerivedStateFromProps(){
        console.log("get derived state from prop")
        return null
    }
    componentDidMount(){
        alert("component added to the DOM ")
    }
    shouldComponentUpdate(){
        
        alert("lets permit the value to be updated")
        return true
    }
    componentDidUpdate(){
        alert("component updated in the DOM ")
    }
    componentWillUnmount(){
        alert("component deleted from  the DOM ")
    }
    game = () =>{
       var mynew = Math.ceil(Math.random() *10)
        {mynew <= 5 && this.setState({colour :  "green" })}
        {mynew >= 6 && this.setState({colour :  "red" })}
    }
    render(){
        return <div>
            <button onClick={()=>this.game()}>Lets play </button>
            <p>{this.state.colour} <br /> {this.state.mynew}</p>
            <Newclass2/>
        </div>
    }
}