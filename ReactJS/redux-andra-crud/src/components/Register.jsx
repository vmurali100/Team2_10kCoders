import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom"
export const Register = () => {

    const [userInput, setUserInput] = useState({ fname: "", lname: "", email: "", password: "" });
    const [alreadyRegistred, setAlreadyRegistered] = useState(false)
    const navigate = useNavigate();

    const registredUsers = JSON.parse(localStorage.getItem("users"));
    if(registredUsers == null)
    {
        registredUsers = []
    }
    else
    {
        registredUsers.find((user)=>{
            if(user.email == userInput.email)
            {
                setAlreadyRegistered(true);
            }
        })
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        const user = { ...userInput };
        user[e.target.name] = e.target.value
        setUserInput(user);
    }

    const handleRegister = () => {
        if(!alreadyRegistred)
        {
            axios.post("http://localhost:3000/users", userInput).
            then((res) => 
            {
                alert("Registration succesful");
                navigate("/")
            });
        }
        else{
            alert("You are already registred , please login");
        }
    }

    return (<div><div className='row'>
        <div className='col-4'></div>
        <div className='col-3'>
            <form>
                <h3 className='App'>Registration Form</h3>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="fname" name="fname" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lname" name="lname" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={handleChange} />
                </div>
                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-primary App" onClick={handleRegister}>Register</button>
                </div>

                <div className='mt-3 App'>
                    <label>Already a member? <Link to="/login">Login</Link></label>
                </div>
            </form>
        </div>
    </div></div>);
};
