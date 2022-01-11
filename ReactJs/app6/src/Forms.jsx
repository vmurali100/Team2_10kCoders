import React,{useState} from "react"

export const User=()=>{
    const[user,setuser]=useState({
        fname:"",
        lname:"",
        email:""
    });
    const handleInput=(e)=>{
        // console.log(e.target.value)
        // setfname(e.target.value)
        let newUser={...user}
        let nameofInput=e.target.name 
        newUser[nameofInput] =e.target.value                   
        setuser(newUser)
    }
    const getUser=()=>{
        console.log(user)
        clearForm()
    }
    const clearForm=()=>{
        setuser({
            fname:"",
            lname:"",
            email:""
        })
    }
    return(
        <div>
            <form>
                <label htmlFor="fname">firstname:</label>
                <input type="text" name="fname" value={user.fname} onChange={(e)=>{handleInput(e)}}/><br/>
                <label htmlFor="lname">lastname:</label>
                <input type="text" name="lname" value={user.lname} onChange={(e)=>{handleInput(e)}}/><br/>
                <label htmlFor="email">email:</label>
                <input type="text" name="email" value={user.email} onChange={(e)=>{handleInput(e)}}/><br/>
                <button type="button" onClick={getUser}>getuser</button>
            </form>
        </div>
    )
}