import axios from "axios";
import React , {useState} from "react";
import {  useNavigate } from "react-router-dom";

export const Register = () => {
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const hanldeChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };

  const handleSubmit=()=>{
      console.log(user);
      axios.post("http://localhost:3000/users",user).then(res=>{
          alert("User Registration Successful")
          navigate("/login")
      })
  }

  return (
    <div style={{backgroundColor:"pink",width:"900px"}} className="container">
      <h2 style={{color:"blue",textAlign:"center",fontWeight:"bold"}}>Registration</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col">
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            name="fname"
            value={user.fname}
            onChange={(e) => {
              hanldeChange(e);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            name="lname"
            value={user.lname}
            onChange={(e) => {
              hanldeChange(e);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            name="username"
            value={user.username}
            onChange={(e) => {
              hanldeChange(e);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={user.email}
            onChange={(e) => {
              hanldeChange(e);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="password"
            value={user.password}
            onChange={(e) => {
              hanldeChange(e);
            }}
          />
        </div>

        <button style={{marginBottom:"30px"}} type="button" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
        </div>
        <div className="col"></div>
      </div>
     
    </div>
  );
};
