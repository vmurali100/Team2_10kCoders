import { Component } from "react"
export default class Pravalli  extends Component{
    constructor(props) {
        super()
    }
    render(){
        return<div>
            <h1 style={{color:"red"}}>{this.props.message}</h1>
            <h1>
                {this.props.Welh}
            </h1>
        </div>
    }
}