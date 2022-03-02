import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Email_Verification_Action, User_Data_Action } from '../Redux/actions';

export const EmailVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const verification = useSelector(state => state.emailVerification);
  // const token = useSelector(state => state.token);
  // var invalidMessage = token.data.data
  // var loginStatus = token.data.status
  console.log("verification: ", verification)
  var status = verification.data.status;
  var message;
  if (status === 200) {
    navigate("/user-dashboard");
  }
  else {
    message = verification.data.data;
  }
  // if (loginStatus === 200) {
  //   dispatch(User_Data_Action(invalidMessage));
  // }
  console.log("verification-status: ", status);
  console.log("verification-message: ", message);

  const code = useSelector(state => state.register.data.data);
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleVerify = () => {
    // console.log("verify fun called");
    // console.log("typeof codE:", typeof(code), "code", code);
    // console.log("typeof userInput:", typeof(userInput), "userInput", userInput);
    // if( code === userInput)
    // {
    //   console.log("matched");
    dispatch(Email_Verification_Action(userInput));
    // }

  }

  return (
    <div className="container">
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <form className="form" role="form">

            <div className="form-group mb-3">
              {/* <label className="sr-only">Email verification code</label> */}
              <input type="text" className="form-control" value={userInput} placeholder="Email verification code" onChange={handleChange} />
            </div>

            {/* displaying error message when user provide invallid credentials */}
            {status !== 200 && <div id="invalid" className="form-text mb-3" style={{ color: "red" }}>{message}</div>}

            <button type="button" className="btn btn-primary alignCenter" onClick={handleVerify}>Verify</button>

          </form>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}
