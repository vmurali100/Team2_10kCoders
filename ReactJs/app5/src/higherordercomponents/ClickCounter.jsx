import React,{Component} from "react"
export default class ClickCounter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handleClick=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>clickme</button>
<h2>
    you clicked {this.state.count} times
</h2>
            </div>
        )
    }
}