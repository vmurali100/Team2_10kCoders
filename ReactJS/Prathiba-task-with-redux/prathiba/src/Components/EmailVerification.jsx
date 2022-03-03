import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Email_Verification_Action, Remove_Email_Verification_Action } from '../Redux/actions';

export const EmailVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verification = useSelector(state => state.emailVerification);
  const [userInput, setUserInput] = useState("");
  var status = verification.data.status;
  var message;

  if (status === 200) 
  {
    dispatch(Remove_Email_Verification_Action());
    navigate("/");
  }
  else {
    message = verification.data.data;
  }


  const handleChange = (event) => 
  {
    setUserInput(event.target.value);
  }

  const handleVerify = () => 
  {
    dispatch(Email_Verification_Action(userInput));
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

            {/* displaying error message when user provide invalid code */}
            {status !== 200 && <div id="invalid" className="form-text mb-3" style={{ color: "red" }}>{message}</div>}

            <button type="button" className="btn btn-primary alignCenter" onClick={handleVerify}>Verify</button>

          </form>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}
