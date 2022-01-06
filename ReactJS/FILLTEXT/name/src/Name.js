import React ,{ Component } from "react";
import { connect } from "react-redux";
import getName from "./Redux/Action";

class FullName extends Component {


     
 
    render(){
        this.props.dispatch(getName())
     console.log(this.props.name)
        console.log(this.props.name)
        return <div>
            {this.props.name.map((e)=>{
                return <h1 key={e.fname}>{e.fname}</h1>
            })}
            
        </div>

        
    }
}
const mapStateToProps = (state)=>{
return {
    name : state.name 
    
}
}
export default connect(mapStateToProps)(FullName)