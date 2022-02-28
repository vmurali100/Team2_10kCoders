import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Login_Verification_Action } from '../Redux/actions';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //accessing state using useSelector hook

    const token = useSelector(state => state.token);
    const EmailVerification = useSelector(state => state);
    // console.log("token ",token)
    // // if (token !== undefined) {
    //     var loginStatus = token.data.status
    //     var invalidMessage = token.data.data
    // // }

    // console.log("login", loginStatus, invalidMessage);
    console.log("login-Register", EmailVerification)
    const [userInput, setuserInput] = useState({ email: "", password: "" });

    //User input Onchange handler
    const handleOnChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setuserInput({ ...userInput, [name]: value })
    }

    //submit button handler
    const handleSubmit = () => {
        dispatch(Login_Verification_Action(userInput)) //dispatching action with useDispatch hook
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form>
                        {/* email input box */}
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" value={userInput.email} onChange={handleOnChange} />
                        </div>

                        {/* password input box */}
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" value={userInput.password} className="form-control" onChange={handleOnChange} />
                        </div>

                        {/* displaying error message when user provide invallid credentials */}
                        {/* {loginStatus === 400 ? <div id="invalid" className="form-text mb-3" style={{ color: "red" }}>{invalidMessage}</div> : loginStatus === 200 && navigate("/user-dashboard")} */}


                        {/* submit button */}
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}


export default Login
