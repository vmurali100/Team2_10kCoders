import axios from 'axios';
import React,{useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    let navigate = useNavigate();
    const [user, setuser] = useState(
       {email:"", password:""}
    );

    const handleChange = (e)=>{
        let newUser  = {...user}
        newUser[e.target.name] = e.target.value
        setuser(newUser)
    }
    const handleClear = ()=>{
        setuser({email:"",password:""})
    }
    const handleSubmit = async()=>{
        handleClear()
        let users = await getAllUsers()
        console.log("USer value",user);
        console.log("Users Promise",users);
        if(users.length == 0){
            alert("You are Not Logged in..Please Login")
            navigate("/register")
        }
        else{
            let loggedInUser = users.find((myUser)=>user.email == myUser.email && user.password == myUser.password)
            if(loggedInUser){
                localStorage.setItem("loggedInUser",JSON.stringify(loggedInUser))
                navigate("/")
            }
            else{
                alert("Your Name details not found..Please Register")
                navigate("/register")
            }
        }
    }

    const getAllUsers = ()=>{
       return new Promise((resolve,reject)=>{
        axios.get("http://localhost:3000/users").then((res)=>{
            resolve(res.data);
        })
       })
    }
    return <div>
        <form>
            <div className="mb-3">
                <label htmlFor='email' className="form-label">Email address</label>
                <input type="email" className="form-control" value={user.email}  name="email"
                onChange={(e)=>{handleChange(e)}}/>
                   
            </div>
            <div className="mb-3">
                <label htmlFor='password' className="form-label">Password</label>
                <input type="password" className="form-control"  value={user.password} name="password"
                onChange={(e)=>{handleChange(e)}} />
            </div>
            <div className="mb-3 form-check">

                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
        </form>
    </div>;
};
