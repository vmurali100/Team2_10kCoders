import React ,{ Component } from "react";
import { connect } from "react-redux";
import { getPostData } from "./Redux/Action";


class Posts extends  Component {
    render(){
        console.log(this.props)
        this.props.dispatch(getPostData())
        return <div>
            {this.props.posts.map((e)=>{
          return <h3 key={e.id}>{e.title}</h3>
            })}
        </div>
    }
}

const mapStateToProps=(state)=>{
    return {
        posts : state.posts
    }
}
export default  connect(mapStateToProps)(Posts)