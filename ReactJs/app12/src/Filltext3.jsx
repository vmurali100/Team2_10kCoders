import React,{Component} from "react"
import {connect} from "react-redux"
class Filltext3 extends Component{
    render(){
        return(
            <div>
                {this.props.filltext3.map((fill3)=>{
                    return <p key={fill3.email}>{fill3.email}</p>
                })}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        filltext3:state.filltext3
    }
}
export default connect(mapStateToProps)(Filltext3)