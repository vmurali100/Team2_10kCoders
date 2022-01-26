import {connect} from "react-redux"
import { getAlbumsAction, getCommentsAction, getJsonUsersAction, getPhotosAction, getPostsAction, getTodosAction, getUserTokenAction } from "../Redux/Actions/index.js"

const  Json = ({todos , comments,posts, photos ,jsonusers ,albums , getTodosFunc , getAlbumsFunc , getCommentsFunc , getPostsFunc , getPhotosFunc , getJsonUsersFunc , getuserformdataFunc})=>{
    return <div> 
        {/* <button type="button" onClick={()=>getTodosFunc()}>GET TODOS</button> 
        <button type="button" onClick={()=>getAlbumsFunc()}>GET ALBUMS</button> 
        <button type="button" onClick={()=>getCommentsFunc()}>GET Comments</button> 
        <button type="button" onClick={()=>getPostsFunc()}>GET POSTS</button> 
        <button type="button" onClick={()=>getPhotosFunc()}>GET PHOTOS</button> 
        <button type="button" onClick={()=>getJsonUsersFunc()}>GET JSON USERS</button>  */}
        <button type="button" onClick={()=>getuserformdataFunc()}>GETTTTTTT</button> 


        {todos.map((e)=>{ 
            return <h1>{e.title}</h1>
        })}
    
        {posts.map((e)=>{ 
            return <h1>{e.body}</h1>
        })}
         {comments.map((e)=>{ 
            return <h1>{e.postId}</h1>
        })}
         {photos.map((e)=>{ 
            return <img src={e.thumbnailUrl} width="100px" height="100px" />
        })}
         {albums.map((e)=>{ 
            return <h1>{e.id}</h1>
        })}
         {jsonusers.map((e)=>{ 
            return <li key={e.id}>{e.phone}</li>
        })}
        {console.log(jsonusers)}
        {console.log(photos)}
    </div>
}
const MSTP =(state)=>{
    return {
  todos : state ,
  posts : state ,
  photos : state ,
  comments : state ,
  jsonusers : state ,
  albums : state ,
  
    }
}
const MDTP = (dispatch) =>{
    return {
        getTodosFunc : ()=>{dispatch(getTodosAction())} ,
        getAlbumsFunc : ()=>{dispatch(getAlbumsAction())} ,
        getCommentsFunc : ()=>{dispatch(getCommentsAction())} ,
        getPhotosFunc : ()=>{dispatch(getPhotosAction())} ,
        getPostsFunc : ()=>{dispatch(getPostsAction())} ,
        getJsonUsersFunc : ()=>{dispatch(getJsonUsersAction())} ,
        getuserformdataFunc : ()=>{dispatch(getUserTokenAction())}

    }
}

export default  connect(MSTP , MDTP)(Json)