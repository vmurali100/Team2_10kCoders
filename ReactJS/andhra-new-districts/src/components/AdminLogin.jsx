import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"

export const AdminLogin = (props) => {

    const { adminLoggedIn, setAdminLoggedIn, loggedIn, setLoggedIn } = props
    const [userInput, setUserInput] = useState({ email: "", password: "" });
    // const [validUser, setValidUser] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/admin").then((res) => {
            localStorage.setItem("admin", JSON.stringify(res.data));
        })
    }, [])

    const handleChange = (e) => {
        const user = { ...userInput };
        user[e.target.name] = e.target.value
        setUserInput(user);
    }

    const handleLogin = () => 
    {
        const adminlist = JSON.parse(localStorage.getItem("admin"));

        if (adminlist.length === 0) 
        { 
            alert("You are not a member please register"); 
        }
        else if (adminlist.length > 0) 
        {
            adminlist.find((admin) => 
            {
                if (userInput.email === admin.email && userInput.password === admin.password) 
                {
                    localStorage.setItem("loggedInUserDetails", JSON.stringify(admin))
                    setAdminLoggedIn(true);
                    setLoggedIn(false);
                    console.log("ADMIN LOGIN logged in user: ",loggedIn,"logged in admin: ",adminLoggedIn);
                    localStorage.setItem("isUserLoggedIn",JSON.stringify(loggedIn));
                    localStorage.setItem("isAdminLoggedIn",JSON.stringify(adminLoggedIn))
                    // setValidUser(true);
                    // console.log("login verification: ",validUser)
                    alert("Login Sucessful")
                    navigate("/admin-dashboard");
                }
            })
        }
        // if(validUser === false)
        // {
        //     alert("Invalid user login details")
        // }
        



    }

    return (<div>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-3'>
                <h3 className='App'>Admin Login Form</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" id="email" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="password" onChange={handleChange} />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-primary App" onClick={handleLogin}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>);
};
