import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"

export const Login = (props) => {

    const { loggedIn, setLoggedIn } = props
    const [userInput, setUserInput] = useState({ email: "", password: "" });
    const [validUser, setValidUser] = useState(false)
    const navigate = useNavigate();


    const handleChange = (e) => {
        console.log(e.target.value)
        const user = { ...userInput };
        user[e.target.name] = e.target.value
        setUserInput(user);
    }

    const handleLogin = () => {
        const userslist = JSON.parse(localStorage.getItem("users"))
        if (userslist.length === 0) { alert("You are not a member please register"); }
        else if (userslist.length > 0) {
            userslist.find((user) => {
                if (userInput.email === user.email && userInput.password === user.password) {
                    localStorage.setItem("loggedInUserDetails", JSON.stringify(user))
                    setLoggedIn(true);
                    setValidUser(true);
                    alert("Login Sucessful")
                    navigate("/");
                }
            })
        }
        else {
            alert("Invalid user login details")
        }



    }

    return (<div>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-3'>
                <h3 className='App'>Login Form</h3>
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

                    <div className='mt-3 App'>
                        <label>Not a member? <Link to="/register">Register</Link></label>
                    </div>
                </form>
            </div>
        </div>
    </div>);
};
