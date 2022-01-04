import React,{Component} from "react";
import {Hordercomp} from "./Hordercomp";
class ClickCounter extends Component{
    
    render(){
        console.log(this.props)
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
export default Hordercomp(ClickCounter)