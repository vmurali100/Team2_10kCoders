import React ,{Component} from 'react'
import { connect } from "react-redux"
import{handle_posts} from "./redux/action"


class Posts extends Component{
    getData= ()=>{
        this.props.dispatch(handle_posts())
      
    }

render(){
    console.log(this.props)
    return <div>
            {this.props.Posts.map((p)=>{
                return<h1 key={p.title}>{p.title}</h1>
            })}
    </div>
}

}

function mapStateToProps(state){
  return{
      Posts:state.Posts
  }
}
export default  connect(mapStateToProps)(Posts)
