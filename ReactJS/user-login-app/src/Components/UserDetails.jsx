import React from "react"; 

export const Userdetails =({user})=>{
    return <div className="container" style={{"marginTop" : "100px"}}>
        <h1>hello <strong>{user.username}</strong>  welcome to my web</h1>
    </div>
}