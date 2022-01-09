import React,{Component} from "react"
import {connect} from "react-redux"
class Comments extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.comment.map((cmnt)=>{
                    return <p key={cmnt.email}>{cmnt.email}</p>
                })}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        comment:state.comment
    }
}
export default connect(mapStateToProps)(Comments)