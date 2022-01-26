import React from "react";

export const Login =()=>{
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                <form>
  <div class="mb-3">
    <label htmlFor="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email"  />
    </div>
   
  <div class="mb-3">
    <label htmlFor="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" />
  </div>
 
  <button type="button" class="btn btn-primary">Log in</button>
</form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
}