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
        console.log("component added to the DOM ")
    }
    shouldComponentUpdate(){
       console.log("lets permit the value to be updated")
        return true
    }
    getSnapshotBeforeUpdate(){
        alert("am from  snapshot before update")
        return null
    }
    componentDidUpdate(){
        alert("component updated in the DOM ")
    }
    componentWillUnmount(){
        console.log("component deleted from  the DOM ")
    }
    game = () =>{
       var mynew = Math.ceil(Math.random() *5)
        {mynew <= 2 && this.setState({colour :  "green" }) } 
        {mynew <= 2 && (document.getElementById("mydiv").style.background = "green" )}
        {mynew >= 3 && this.setState({colour :  "red" }) }
        { mynew >= 3 &&  (document.getElementById("mydiv").style.background = "red" )}
    }
    render(){
        return <div id="mydiv">
            <button onClick={()=>this.game()}>Lets play </button>
            <p id="mypara">{this.state.colour} <br /> {this.state.mynew}</p>
            <Newclass2/>
        </div>
    }
}