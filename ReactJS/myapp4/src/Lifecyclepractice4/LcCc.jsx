import React ,{ Component } from "react";

export default class LcCc extends Component {
    constructor(props){
        console.log("constructor Area")
        super(props)
        this.state = {}
    }
    render(){
       return <div>
            {this.props.greeting.map((good)=>{
                return <h1 >{good} {<button onClick={(morning)=>this.props.deletebtn(morning)}>Delete</button>}</h1>
            })}
        </div>

    }
}