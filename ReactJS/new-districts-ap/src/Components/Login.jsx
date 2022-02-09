import axios from "axios";
import React, { Component, useEffect, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { UserConsumer } from "./Home";


export const Login = ()=>{
  const [ user , setUser]  =  useState({
     email : "" ,
      password : "" ,
 }) ;
 const [input ,setInput] = useState("") ;
 const [results ,setResults] = useState("") ;
 const navigate = useNavigate()

 useEffect (()=>{
let newinput =  JSON.parse(localStorage.getItem("input"));
  setInput(newinput)
 },[])

  const [useres ,setUseres] = useState({})
  const handlechange = (e)=>{
      let newuser = {...user} ;
      newuser[e.target.name] = e.target.value ;
     setUser(newuser);
  } ;
  //   const showResults = async()=>{
  //  await axios.get('http://localhost:3000/districts').then((res)=>{
  //     console.log(res.data)
  //     // let data = res.data
  //   let district = res.data.find( d => d.const.indexOf(input) > -1 ) ;
  //   console.log(district.dist) ;
  // setResults(district.dist);
  // })
  // document.querySelector(".loginform").style.display = "none" ;
  // document.querySelector(".resform").style.display = "none" ;
  // document.querySelector("#results").style.display = "block" ;
// } 
const getuser = async()=>{
let us = await getuserprom() ;
console.log(us)
if(us.length == 0) {
  window.alert("Not Registered ..... please Register and Login Again")
  navigate("/register")
} else {
  let logged = us.find( myus => myus.email == user.email && myus.password  == user.password) ;
  if(logged){
    localStorage.setItem("loggedUser" , JSON.stringify(user));
alert("Login successfull......!")
    navigate("/");

  }else{
    window.alert("Not Registered ..... please Register and Login Again");
    navigate("/register")
  }
}


}
  const getuserprom =()=>{
     return new Promise ((resolve ,reject)=> {
      axios.get('http://localhost:3000/users').then(res=>{
        resolve( res.data)
        //  setUseres(res.data) 
     });
     
     })
    //   useres.forEach((e)=>{
    //   if(e.username == user.username && e.password == user.password){
    //     window.alert("succesfully logged in")
        
    //   }
    //   // else if(e.username != user.username && e.password != user.password){
    //   //   window.alert("Enter Valid details to Log In")
    //   // }
    // })
    //   console.log(user)
  }
  const getResForm =()=>{
      // document.querySelector(".loginform").style.display = "none" ;
      // document.querySelector(".resform").style.display = "block" ;
 }
 
    return <div>
        <div className="container" style={{"marginTop" : "80px"}}> 
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                <form className="loginform">
                    <h2>Log In</h2>
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" class="form-control" value={user.email} onChange={(e)=>{handlechange(e)}} name="email" />
    </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" value={user.password} onChange={(e)=>{handlechange(e)}} name="password" />
  </div>
  
  <button type="button" class="btn btn-primary" onClick={getuser}>Log In</button> <br />
   Don't Have Account ?   <button type="button" class="btn btn-warning" onClick={getResForm}>Register</button>
</form> 
 <br />


                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
}