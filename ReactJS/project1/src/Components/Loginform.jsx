import React, { useState } from 'react';
import { connect } from "react-redux"
import { getUserTokenAction } from '../Redux/actions';


const Loginform = (props) => {
    //   console.log(props)
    const [email, setEmail] = useState({ email: "" });
    const [password, setPassword] = useState({ password: "" })
    console.log("email: ", email, "password: ", password)
    function handleEmailInput(event) {
        // console.log(event.target.value)
        // let emailValue = event.target.value
        setEmail({ email: event.target.value })
    }


    function handlePasswordInput(event) {
        // console.log(event.target.value)
        setPassword({ password: event.target.value })
    }

    //  function handleInput(event)
    //  {
    //      console.log()
    //      setState({
    //          [event.target.name] : event.target.value,  
    //      })

    //  }


    function handleSubmit() {
        console.log("handlesubmit ", email.email, password.password)
        props.fetch_token(email.email, password.password);
    }
    return (
        <div>

            <form>
                <label htmlFor='email'>Email</label>
                <input type="text" name="email" id="email" value={email.email} onChange={handleEmailInput} /><br />
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" id="password" value={password.password} onChange={handlePasswordInput} /><br />
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>

            <p>{props.id} {props.token} {props.message}</p>

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
        fetch_token: (email, password) => { dispatch(getUserTokenAction(email, password)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loginform)
