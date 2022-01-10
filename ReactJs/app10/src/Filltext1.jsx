import React, {Component} from "react"
import {connect} from "react-redux" 

class Filltext1 extends Component{
    render(){
        return(
            <div>
                {this.props.filltext1.map((fill1)=>{
                    return <p key={fill1.fname}>{fill1.fname}</p>
                })}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        filltext1:state.filltext1
    }
}
export default connect(mapStateToProps)(Filltext1)