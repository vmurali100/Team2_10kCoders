import React,{Component} from "react"
import {connect} from "react-redux"
class Posts extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.post.map((pst)=>{
                  return <p key={pst.title}>{pst.title}</p>
                })}
                </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        post:state.post
    }
}
export default connect(mapStateToProps)(Posts)