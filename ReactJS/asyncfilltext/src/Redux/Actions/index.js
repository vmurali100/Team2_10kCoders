import axios from "axios"
import { GET_ALBUMS, GET_CART, GET_COMMENTS, GET_DATA, GET_EMPLOYEE, GET_JSON_USERS, GET_NAME, GET_PHOTOS, GET_POSTS, GET_PRODUCTS, GET_TODOS, GET_USERS } from "./Action-types"

export  const getDataAction = ()=>{
    var personData 
 return  (dispatch)=>  axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true").then(({data})=>{
        personData =  data
    //    console.log (personData)
    dispatch({
        type : GET_DATA ,
        payload : personData
    })
    })
   
}

export  const getFnameAction = ()=>{
    var name
 return  (dispatch)=>  axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true").then(({data})=>{
        name =  data
    //    console.log (personData)
    dispatch({
        type : GET_NAME ,
        payload : name
    })
    })
   
}
export  const getEmployeeAction = ()=>{
    var employee
 return  (dispatch)=>  axios.get("http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then(({data})=>{
    employee =  data
    //    console.log (personData)
    dispatch({
        type : GET_EMPLOYEE ,
        payload : employee
    })
    })
   
}

// FAKE STORE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export  const getUsersAction = ()=>{
    var users
 return  (dispatch)=>  axios.get("https://fakestoreapi.com/users").then(({data})=>{
    users =  data
    //    console.log (personData)
    dispatch({
        type : GET_USERS ,
        payload : users
    })
    })
   
}

export  const getProductsAction = ()=>{
    var products
 return  (dispatch)=>  axios.get("https://fakestoreapi.com/products").then(({data})=>{
    products =  data
    //    console.log (personData)
    dispatch({
        type : GET_PRODUCTS ,
        payload : products
    })
    })
   
}

export  const getCartAction = ()=>{
    var cart
 return  (dispatch)=>  axios.get("https://fakestoreapi.com/carts").then(({data})=>{
    cart =  data
    //    console.log (personData)
    dispatch({
        type : GET_CART ,
        payload : cart
    })
    })
   
}

// JSON -PLACEHOLDER +========================================
export  const getTodosAction = ()=>{
    var todos
 return  (dispatch)=>  axios.get("https://jsonplaceholder.typicode.com/todos").then(({data})=>{
    todos =  data
    //    console.log (personData)
    dispatch({
        type : GET_TODOS ,
        payload : todos
    })
    })
   
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export  const getAlbumsAction = ()=>{
    var albums
 return  (dispatch)=>  axios.get("https://jsonplaceholder.typicode.com/albums").then(({data})=>{
    albums =  data
    //    console.log (personData)
    dispatch({
        type : GET_ALBUMS ,
        payload : albums
    })
    })
   
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export  const getCommentsAction = ()=>{
    var comments
 return  (dispatch)=>  axios.get("https://jsonplaceholder.typicode.com/comments").then(({data})=>{
    comments =  data
    //    console.log (personData)
    dispatch({
        type : GET_COMMENTS ,
        payload : comments
    })
    })
   
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export  const getJsonUsersAction = ()=>{
    var jsonusers
 return  (dispatch)=>  axios.get("https://jsonplaceholder.typicode.com/users").then(({data})=>{
    jsonusers =  data
    //    console.log (personData)
    dispatch({
        type : GET_JSON_USERS ,
        payload : jsonusers
    })
    })
   
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export  const getPhotosAction = ()=>{
    var photos
 return  (dispatch)=>  axios.get("https://jsonplaceholder.typicode.com/photos").then(({data})=>{
    photos =  data
    //    console.log (personData)
    dispatch({
        type : GET_PHOTOS ,
        payload : photos
    })
    })
   
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export  const getPostsAction = ()=>{
    var posts
 return  (dispatch)=>  axios.get("https://jsonplaceholder.typicode.com/posts").then(({data})=>{
    posts =  data
    //    console.log (personData)
    dispatch({
        type : GET_POSTS ,
        payload : posts
    })
    })
   
}

