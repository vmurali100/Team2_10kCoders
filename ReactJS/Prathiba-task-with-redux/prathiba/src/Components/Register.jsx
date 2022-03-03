import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Register_Verification_Action } from '../Redux/actions';
import { EmailVerification } from './EmailVerification';

const Register = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();

    // accessing state using useSelector hook
    const RegisterStatus = useSelector(state =>
    {
        return  state.register.data.status
    });
    const invalidMessage =useSelector(state => state.register.data.data);
    const [userInput, setuserInput] = useState({email:"", name:"", password:"", cpassword:"", mobile:"", photo:""});

    //User input Onchange handler
    const handleOnChange = (event) =>
    {
        let value = event.target.value;
        let name = event.target.name;
        setuserInput({...userInput, [name] : value})
    }

    //submit button handler
    const handleSubmit = ()=>
    {
        dispatch(Register_Verification_Action(userInput)) //dispatching action with useDispatch hook
    }

    return (
        <div className="container" style={{marginBottom:50+"px"}}>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                <div className='mb-3'><h2>Registration Form</h2></div>
                    <form>
                        {/* email input box */}
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" value={userInput.email} onChange={handleOnChange} />
                        </div>

                        {/* name input box */}
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" name="name" className="form-control" value={userInput.name} onChange={handleOnChange} />
                        </div>

                        {/* password input box */}
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" value={userInput.password} className="form-control" onChange={handleOnChange}/>
                        </div>

                        {/* password input box */}
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" name="cpassword" value={userInput.cpassword} className="form-control" onChange={handleOnChange}/>
                        </div>

                        {/* mobile number input box */}
                        <div className="mb-3">
                            <label className="form-label">Mobile Number</label>
                            <input type="text" name="mobile" value={userInput.mobile} className="form-control" onChange={handleOnChange}/>
                        </div>

                        {/* photo input box */}
                        {/* <div className="mb-3">
                            <label className="form-label">Choose Photo</label>
                            <input type="file" name="photo" className="form-control" onChange={handleOnFileChange}/>
                        </div> */}

                        {/* displaying error message when user provide invallid credentials */}
                        {RegisterStatus && RegisterStatus !== 200 ? <div id="invalid" className="form-text mb-3" style={{color:"red"}}>{invalidMessage}</div> : RegisterStatus === 200 && navigate("/email-verification") }


                        {/* submit button */}
                        <div className='mb-5'><button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button></div>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Register;