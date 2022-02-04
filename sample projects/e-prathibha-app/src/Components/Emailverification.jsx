import React, { useState } from "react";
import { connect } from "react-redux";
import { VerifyEmailAction } from "../Redux/Actions";


const EmailVerification =(props)=>{

    const [verificationCode ,setVerificationCode] =useState("");

    const verifyEmail =(verificationCode)=>{
      props.verifyEmailFunc(verificationCode)
    }
    return <div>
      <div className="container" style={{height : "260px" , margin : "150px auto"}}>
     <div  className="row" >
          <div className="col-4"></div>
          <div className="col-4" style={{"backgroundColor" : "lightyellow" , height: "250px" , padding: "50px" , border : " 1px solid maroon"}}>  <form action="">
                <label htmlFor=""> <h2>Enter Verification Code</h2> </label> <br /> <br />
                <input type="text" placeholder="*code" value={verificationCode} name="verificationCode" style={{height : "35px" , borderRadius : "5px"}} /> <br />
                <button type="button" className="btn btn-info" onClick={(verificationCode)=>verifyEmail(verificationCode)}>Verify</button>
            </form></div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
}

const MSTP =(state)=>{
    return {

    }
}
const MDTP =(dispatch)=>{
    return {
     verifyEmailFunc : (verificationCode)=>dispatch(VerifyEmailAction(verificationCode))
    }
}

export default  connect(MSTP ,MDTP)(EmailVerification)