import React ,{ Component } from "react";
import { connect } from "react-redux";
import getName from "./Actions";

class FullName extends Component {

    render(){
        this.props.dispatch(getName())
        console.log(this.props.name)
        return <div>
            {this.props.name.map((nam)=>{
                return <h1 key={nam.fname}>{nam.fname}</h1>
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