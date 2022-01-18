import React,{Component} from "react"
import {connect} from "react-redux"
import { getAllPostsAction } from "../redux_async/redux/actions"



class Posts extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
<button onClick={()=>{this.props.getAllPostsFunc()}}>getallposts</button>
{this.props.posts.map((po)=>{
    return <p key={po.body}>{po.body}</p>
})}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        posts:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllPostsFunc:()=>dispatch(getAllPostsAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts)
