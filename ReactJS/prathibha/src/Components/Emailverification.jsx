import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { VerifyEmailAction } from "../Reducer/actions";

const EmailVerification = (props) => {
  const [verificationCode, setVerificationCode] = useState("");

  const { verifyEmailFunc } = props;
  const verifyEmail = (verificationCode) => {
    verifyEmailFunc(verificationCode);
    console.log(verificationCode);
  };
  const handlechange = (e) => {
    setVerificationCode(e.target.value);
  };
  useEffect(() => {}, []);
  return (
    <div>
      <div
        className="container"
        style={{ height: "260px", margin: "150px auto" }}
      >
        <div className="row">
          <div className="col-4"></div>
          <div
            className="col-4"
            style={{
              backgroundColor: "lightyellow",
              height: "250px",
              padding: "50px",
              border: " 1px solid maroon",
            }}
          >
            {" "}
            <form action="">
              <label htmlFor="">
                {" "}
                <h2>Enter Verification Code</h2>{" "}
              </label>{" "}
              <br /> <br />
              <input
                type="text"
                placeholder="*code"
                value={verificationCode}
                name="verificationCode"
                style={{ height: "35px", borderRadius: "5px" }}
                onChange={(e) => handlechange(e)}
              />{" "}
              <br />
              <button
                type="button"
                className="btn btn-info"
                onClick={() => verifyEmail(verificationCode)}
              >
                Verify
              </button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

const MSTP = (state) => {
  return {};
};
const MDTP = (dispatch) => {
  return {
    verifyEmailFunc: (verificationCode) =>
      dispatch(VerifyEmailAction(verificationCode)),
  };
};

export default connect(MSTP, MDTP)(EmailVerification);