import { Component } from "react"
import Pravalli  from "./Pravalli"

export class Buddu extends Component{
    constructor(){
        super()
        this.state={
            message:"i has been lived in America since 2010",
            Welh:"i has been left my home towm since 11 years"
        }
    }
    render(){
        return<div>
         <button onClick={()=>{this.setState({message:"since2009"})}}> change state</button>
                  <Pravalli{...this.state} />
        </div>
          
    }
}