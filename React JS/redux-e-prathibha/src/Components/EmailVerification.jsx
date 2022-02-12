import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { EmailVerificationAction } from '../Actions'
import { useNavigate } from 'react-router-dom'

const EmailVerification = (props) => {
    let navigate=useNavigate();
    const [verificationCode, setverificationCode] = useState("")
    const {EmailVerificationFunc}=props;

    const emailVerify=(verificationCode)=>{
    EmailVerificationFunc(verificationCode)
    navigate("/login")
        console.log(verificationCode)
        
    }

    const handlechange=(e)=>{
        setverificationCode(e.target.value)
    }
    useEffect(() => {
     
    }, [])
    
    return (
        <div>
            <div
                className="container" style={{ height: "260px", margin: "150px auto" }}>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        {" "}
                        <h2 style={{ color: "blue", fontStyle: "italic" }}>Check Your E-mail</h2>
                        <form action="" style={{
                            backgroundColor: "lightgreen",
                            height: "250px",
                            padding: "50px",
                            border: " 1px solid maroon",
                        }} >
                            <label htmlFor="">
                                {" "}
                                <h2>Enter Verification Code</h2>{" "}
                            </label>{" "}
                            <br /> <br />
                            <input
                                type="text"
                                placeholder="Enter Code Here"
                                value={verificationCode}
                                name="verificationCode"
                                style={{ height: "35px", borderRadius: "5px" }}
                            onChange={(e) => handlechange(e)}
                            />{" "}
                            <br />
                            <button
                                type="button"
                                className="btn btn-info m-2"
                            onClick={() => emailVerify(verificationCode)}
                            >
                                Verify
                            </button>
                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {

    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        EmailVerificationFunc:(verificationCode)=>dispatch(EmailVerificationAction(verificationCode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailVerification)
