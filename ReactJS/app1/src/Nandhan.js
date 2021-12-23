import { Component } from "react";
import Rajesh from "./Rajesh";

export class Nandhan extends Component{
    constructor(){
        super()
        this.state ={
            message:"Welcome home" ,
            WelcomeReact:"Hi i am React"
        }
    }
     render(){
         return<div>
             <Rajesh {...this.state} />
         </div>
         
     }
}