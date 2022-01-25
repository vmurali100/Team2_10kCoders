import React, { useState } from 'react';
import { connect } from "react-redux"
import { getUserTokenAction } from '../Redux/actions';
import { useNavigate } from "react-router-dom"


const Loginform = (props) => {

    localStorage.setItem("LoginDetails",JSON.stringify(props));
    let details = JSON.parse(localStorage.getItem("LoginDetails"));
    console.log(details.message);


    let history = useNavigate();
    const [email, setEmail] = useState({ email: "" });
    const [password, setPassword] = useState({ password: "" })


    function handleEmailInput(event) {
        setEmail({ email: event.target.value })
    }


    function handlePasswordInput(event) {
        setPassword({ password: event.target.value })
    }


    function handleSubmit() {
        console.log("handlesubmit ", email.email, password.password)
        props.fetch_api(email.email, password.password); 
    }
        
    return (
        <div>

            <form>
                <label htmlFor='email'>Email</label>
                <input type="text" name="email" id="email" value={email.email} onChange={handleEmailInput} /><br />
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" id="password" value={password.password} onChange={handlePasswordInput} /><br />
                <button type="button" onClick={handleSubmit}>Login</button>
                {
                    props.message === "successfully Login" && history("/dashboard")
                }
            </form>

            {/* <p>{props.id} {props.token} {props.message}</p> */}

        </div>
    );
};

function mapStateToProps(state) {
    return {
        id: state.Id,
        token: state.Token,
        message: state.Message
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetch_api: (email, password) => { dispatch(getUserTokenAction(email, password)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loginform)
