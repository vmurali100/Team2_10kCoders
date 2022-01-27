import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { UserConsumer } from "./Home";


export const Login = ()=>{
  const [ user , setUser]  =  useState({
     email : "" ,
      password : "" ,
 }) ;
 const [input ,setInput] = useState("") ;
 const [results ,setResults] = useState("")

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
    const showResults = async()=>{
   await axios.get('http://localhost:3000/districts').then((res)=>{
      console.log(res.data)
      // let data = res.data
    let district = res.data.find( d => d.const.indexOf(input) > -1 ) ;
    console.log(district.dist) ;
  setResults(district.dist);
  })
  document.querySelector(".loginform").style.display = "none" ;
  document.querySelector(".resform").style.display = "none" ;
  document.querySelector("#results").style.display = "block" ;} 
  const getuser =()=>{

      axios.get('http://localhost:3000/users').then(res=>{
         console.log("data " , res.data)
          setUseres(res.data) 
      })
      useres.forEach((e)=>{
      if(e.username == user.username && e.password == user.password){
        window.alert("succesfully logged in")
        showResults()
      }})
      console.log(user)
  }
  const getResForm =()=>{
      document.querySelector(".loginform").style.display = "none" ;
      document.querySelector(".resform").style.display = "block" ;
 }
  const registerUser = async(e)=>{
    handlechange(e)
    console.log(user)
    // let options = {
    //     method : "POST" ,
    //     url : "http://localhost:3000/users" ,
    //     headers : {'Content-Type': 'application/json' } ,
    //     body : ({email : user.email ,password : user.password})
    // }
    // axios(options).then((res)=>{
    //     console.log(res.data)
    // })
    
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  let newUser = {...user , id:100}
    axios.post("http://localhost:3000/users" , user).then((res)=> console.log(res.data , useres));

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // let response = await axios.post('http://localhost:3000/users' , JSON.stringify({email : user.email ,password : user.password})).then((res)=>{console.log(res)}).catch((err)=>err)
    //  fetch('http://localhost:3000/users', {
    //      method : 'POST',
    //      headers : {
    //          'Content-Type' : 'application/json'
    //      } ,
    //      body: JSON.stringify(user)
    // }).then(res=>res.json()).then(data=> console.log(data))
}
    return <div>
      <UserConsumer>
       { (val)=>{
         console.log(val)
        }}
      </UserConsumer>
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
  
  <button type="button" class="btn btn-primary" onClick={()=>getuser()}>Log In</button> <br />
   Don't Have Account ?   <button type="button" class="btn btn-warning" onClick={getResForm}>Register</button>
</form> 
<form className="resform" style={{"display" : "none"}}>
    <h2>Sign Up</h2>
    {/* <div class="mb-3">
    <label  class="form-label">S.No</label>
    <input type="number" class="form-control" value={user.id} onChange={(e)=>{handlechange(e)}} name="id"/>
    </div> */}
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" class="form-control" value={user.email} onChange={(e)=>{handlechange(e)}} name="email"/>
    </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" value={user.password} onChange={(e)=>{handlechange(e)}} name="password" />
  </div>
  
  <button type="button" class="btn btn-primary" onClick={registerUser}>Sign Up</button>
  </form> <br />
  <div style={{"display": "none"}} id="results">
    <h1>Your District is :{results}</h1>
  </div>

                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
  
}