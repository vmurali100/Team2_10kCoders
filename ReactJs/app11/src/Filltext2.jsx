import React, {Component} from "react"
import {connect} from "react-redux"
class Filltext2 extends Component{
    render(){
        return(
            <div>
                {this.props.filltext2.map((fill2)=>{
                    return <p key={fill2.address}>{fill2.address}</p>
                })}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        filltext2:state.filltext2
    }
}
export default connect(mapStateToProps)(Filltext2)