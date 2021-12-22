import {Component} from "react";
export default class Appppp extends Component{
    constructor(props){
super()
console.log(props)
    }
   render(){
       return <div>
            {/* <h2 style={{color:"Pink"}}>{this.props.msg}</h2>
            <h3>{this.props.welc}</h3> */}
            <h2 style={{color:"Green"}}>{this.props.message}</h2>
           <h3>{this.props.welcomeMsg}</h3>
            </div>
   }
}