import React,{Component} from "react"
import { Hordercomp } from "./Hordercomp"
 class HoverCounter extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         count:0
    //     }
    // }
    // handleCount=()=>{
    //     this.setState({count:this.state.count+1})
    // }

    render(){
        console.log(this.props)
        return(
            <div>
                <h2 onMouseOver={this.props.handleCount}>you hovered {this.props.count}</h2>
            </div>
        )
    }
}
export default Hordercomp(HoverCounter)