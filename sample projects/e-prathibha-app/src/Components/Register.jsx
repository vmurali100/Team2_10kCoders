import React from "react";
export const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="row" style={{ backgroundcolor: "beige" }}>
          <div className="col-2"></div>
          <div className="col-8" id="register-div-6">
            <form id="register-form">
              <div className="row">
                <button className="col-6" id="login">Login</button>{" "}
                <button className="col-6" id="register">Register</button>
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="row">
                <div className="col-5">
                  <input type="checkbox" name="RememberMe" id="RememberMe" />
                  <label htmlFor="RememberMe">Remember Me</label> <br />
                  <a href="#">Re-Send Email Verification</a> <br /> <br />
                  <button
                    type="button"
                    class="btn btn-dark"
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
              <br />
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};
