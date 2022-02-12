import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { LoginAction, loginAction, RegisterAction, registerAction } from "../Actions/index";


const Login = (props) => {
    let navigate = useNavigate()
    const { Registerdata, logindata } = props
    console.log(props)

    const [userlogin, setuserlogin] = useState({
        email: "",
        password: ""
    })
    const [userRegister, setuserRegister] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        mobile: ""
    })
    const handleChange = (e) => {
        let newuser = { ...userlogin };
        newuser[e.target.name] = e.target.value;
        console.log(newuser)
        setuserlogin(newuser)
    }

    const handlereg = (e) => {
        let newreg = { ...userRegister };
        newreg[e.target.name] = e.target.value;
        console.log(newreg)
        setuserRegister(newreg)
    }
    // const handleLogin = (e) => {
    //         e.preventDefault();
    //         console.log(userlogin)
    //     }

    // const handleRegister=(e)=>{
    //     e.preventDefault();
    //     console.log(userRegister)
    // }

    const RegisterUser = (userRegister) => {
        console.log(props);
        Registerdata(userRegister);
        console.log(userRegister);
        let clear = {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
            mobile: "",
        };
        setuserRegister(clear);
        navigate("/emailVerification");
    };

    useEffect(() => {
        console.log(userlogin);
    }, [userlogin]);

    return (
        <div>
            <div className="container">
                <div className="row" style={{ backgroundcolor: "beige" }}>
                    <div className="col-2"></div>
                    <div className="col-8" id="register-div-6">
                        <form id="register-form">
                            <div className="row">
                                <button type="button" className="col-6" id="login" onClick={() => {
                                    document.getElementById("login-input").style.display = "block";
                                    document.getElementById("signup-input").style.display = "none";
                                    document.getElementById("login").style.backgroundColor = "black";
                                    document.getElementById("login").style.color = "white";
                                    document.getElementById("register").style.backgroundColor = "white";
                                    document.getElementById("register").style.color = "black";

                                }}>Login</button>{" "}
                                <button type="button" className="col-6" id="register" onClick={() => {
                                    document.getElementById("login-input").style.display = "none";
                                    document.getElementById("signup-input").style.display = "block";
                                    document.getElementById("register").style.backgroundColor = "black";
                                    document.getElementById("register").style.color = "white";
                                    document.getElementById("login").style.backgroundColor = "white";
                                    document.getElementById("login").style.color = "black";

                                }}>Register</button>
                            </div>
                            <div id="login-input">
                                <div className="mb-3">
                                    <input type="email" className="form-control" name="email" value={userlogin.email} placeholder="Email" onChange={(e) => { handleChange(e) }} />
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    value={userlogin.password}
                                    onChange={(e) => { handleChange(e) }}

                                />
                                <div className="row">
                                    <div className="col-5">
                                        <input type="checkbox" name="RememberMe" id="RememberMe" />
                                        <label htmlFor="RememberMe">Remember Me</label> <br />
                                        <a href="#">Re-Send Email Verification</a> <br /> <br />
                                        <button
                                            type="button"
                                            className="btn btn-dark"
                                            onClick={() => { logindata(userlogin,()=>{navigate("/login/entrypage")}) }}
                                            style={{
                                                height: "35px",
                                                fontSize: "17px",
                                                padding: "2px",
                                                width: "250px",
                                            }}
                                        >
                                            Log in
                                        </button>


                                    </div>
                                    <div className="col-5">
                                        {" "}
                                        <br />
                                        <br />
                                        <br />{" "}
                                        <a href="#">
                                            {" "}
                                            <h6>Forgot Password</h6>
                                        </a>
                                    </div>
                                    <div className="col-2">
                                        <button
                                            type="button"
                                            className="btn btn-dark"
                                            style={{
                                                height: "35px",
                                                fontSize: "17px",
                                                padding: "2px",
                                                width: "50px",
                                            }}
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>{" "}
                                <hr />
                                <div className="row">
                                    <h6>Don't have an account? Newuser? <a href="#">Create Account</a></h6>
                                </div>
                            </div>
                            <br />
                            <div id="signup-input" style={{ display: "none" }}>
                                <div className="mb-3">

                                    <input type="email"
                                        className="form-control"
                                        placeholder="*Email"
                                        name="email"
                                        value={userRegister.email}
                                        onChange={(e) => { handlereg(e) }} />
                                </div>
                                <div className="mb-3">

                                    <input type="text"
                                        className="form-control"
                                        placeholder="*Name"
                                        value={userRegister.name}
                                        onChange={(e) => { handlereg(e) }}
                                        name="name"
                                    />
                                </div>
                                <div className="mb-3">

                                    <input type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        value={userRegister.password}
                                        onChange={(e) => { handlereg(e) }} />
                                </div>
                                <div className="mb-3">

                                    <input type="password"
                                        className="form-control"
                                        placeholder="*Confirm Password"
                                        name="confirmPassword"
                                        value={userRegister.confirmPassword}
                                        onChange={(e) => { handlereg(e) }} />
                                </div>
                                <div className="mb-3">

                                    <input type="number"
                                        className="form-control"
                                        placeholder="*Mobile"
                                        name="mobile"
                                        value={userRegister.mobile}
                                        onChange={(e) => { handlereg(e) }} />
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-9" style={{ paddingRight: "0px" }}> <input type="password" className="form-control" /></div>
                                        <div className="col-3" style={{ paddingLeft: "0px" }}><button type="button" style={{
                                            height: "38px",
                                            fontSize: "15px",
                                            padding: "2px",
                                            width: "100px",
                                            backgroundColor: "black",
                                            color: "white"
                                        }}>Photo</button></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6"> <h6 style={{ fontSize: "13px" }}>Answer simple maths : 15+9 = ?</h6></div>
                                    <div className="col-6"></div>
                                </div> <br />
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Enter Security code shown above" />
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <button type="button"
                                            className="btn btn-dark"
                                            onClick={() => { RegisterUser(userRegister) }}>
                                            {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-person-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg> */}
                                            Submit</button></div>
                                    <div className="col-9"></div>
                                </div>


                            </div>
                        </form>
                        {/*++++++++++++++++++++ sign up form +++++++++++ */}
                        <form>

                        </form>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => { return {} }
const mapDispatchToProps = (dispatch) => {
    return {
        logindata: (userlogin,entry) => dispatch(LoginAction(userlogin,entry)),
        Registerdata: (userRegister) => dispatch(RegisterAction(userRegister))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)