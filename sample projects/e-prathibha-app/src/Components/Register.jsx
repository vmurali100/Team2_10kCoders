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
                <button type="button" className="col-6" id="login" onClick={()=> {
                  document.getElementById("login-input").style.display = "block";
                  document.getElementById("signup-input").style.display = "none";
                  document.getElementById("login").style.backgroundColor = "black";
                  document.getElementById("login").style.color = "white";
                  document.getElementById("register").style.backgroundColor = "white";
                  document.getElementById("register").style.color = "black";

                  }}>Login</button>{" "}
                <button type="button" className="col-6" id="register"  onClick={()=> {
                  document.getElementById("login-input").style.display = "none";
                  document.getElementById("signup-input").style.display = "block";
                  document.getElementById("register").style.backgroundColor = "black";
                  document.getElementById("register").style.color = "white";
                  document.getElementById("login").style.backgroundColor = "white";
                  document.getElementById("login").style.color = "black";
                
                  }}>Register</button>
              </div>
             <div id="login-input">
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
             </div>
              <br />
              <div id="signup-input" style={{display : "none"}}>
                  <div class="mb-3">
    
    <input type="email" class="form-control" placeholder="*Email" />
    </div>
  <div class="mb-3">
   
    <input type="password" class="form-control" placeholder="*Name" />
  </div>
  <div class="mb-3">
    
    <input type="email" class="form-control" placeholder="*Password" />
    </div>
  <div class="mb-3">
   
    <input type="password" class="form-control" placeholder="*Confirm Password" />
  </div>
  <div class="mb-3">
    
    <input type="email" class="form-control" placeholder="*Mobile" />
    </div>
  <div class="mb-3">
  <div className="row">
    <div className="col-9" style={{paddingRight : "0px"}}> <input type="password" class="form-control"  /></div>
    <div className="col-3" style={{paddingLeft : "0px"}}><button type="button"  style={{
                      height: "38px",
                      fontSize: "17px",
                      padding: "2px",
                      width: "120px",
                      backgroundColor : "black",
                      color : "white"
                    }}>Photo</button></div>
    </div> 
  </div>
 <div className="row">
   <div className="col-6"> <h6>Answer simple maths : 5+6 = ?</h6></div>
   <div className="col-6"></div>
 </div> <br />
  <div class="mb-3">
   <input type="password" class="form-control" placeholder="Enter Security code shown above" />
  </div>
  <div className="row">
    <div className="col-3"><button type="submit" class="btn btn-dark" >
    <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>Submit</button></div>
    <div className="col-9"></div>
  </div>
 
  
              </div>
            </form>
            {/*++++++++++++++++++++ sign up form +++++++++++ */}
            <form>

</form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};
