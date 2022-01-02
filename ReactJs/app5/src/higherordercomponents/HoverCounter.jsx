import React,{Component} from "react"
export default class HoverCounter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handleCount=()=>{
        this.setState({count:this.state.count+1})
    }

    render(){
        return(
            <div>
                <h2 onMouseOver={this.handleCount}>you hovered {this.state.count}</h2>
            </div>
        )
    }
}