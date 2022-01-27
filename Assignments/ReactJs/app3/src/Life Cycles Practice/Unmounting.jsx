import React,{Component} from "react"
export class Unmounting extends Component{
    componentWillUnmount(){
        alert("This will execute when we terminate the Program")
    }
    render(){
        return(
            <div>
                <h2>Iam Visible Now</h2>
            </div>
        )
    }
}