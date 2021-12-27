import React,{Component}from "react"
export default class ConditionComponent extends Component{
    componentWillUnmount(){
        alert("iam going tobe removed now")
    }
    render(){
        return(
            <div>
                <h2>hello iam visible now</h2>
            </div>
        )
    }
}