import React,{Component} from "react";
import {Hordercomp} from "./Hordercomp";
class ClickCounter extends Component{
    
    render(){
        console.log(this.props);
        let { handleCount,count}=this.props;
        return(
            <div>
                <button onClick={handleCount}>clickme</button>
<h2>
    you clicked {count} times
</h2>
            </div>
        )
    }
}
export default Hordercomp(ClickCounter)