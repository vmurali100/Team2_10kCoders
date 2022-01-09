import React,{Component} from "react"
import {connect} from "react-redux"
class Students extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
{this.props.posts.map((std)=>{
    return <p key={std.title}>{std.title}</p>
})}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        posts:state.posts
    }
}
export default connect(mapStateToProps)(Students)
