import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginaction } from "../redux/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedindata = useSelector((state) => state.logindata);
  const [loginuser, setloginuser] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    let newloginuser = { ...loginuser };
    newloginuser[e.target.name] = e.target.value;
    setloginuser(newloginuser);
  };
  const handlesubmit = (loginuser) => {
    dispatch(loginaction(loginuser));
  };
  useEffect(() => {
    if (loggedindata.status === 200) {
      localStorage.setItem("loggedindata", JSON.stringify(loggedindata));
      alert("login successful");
      navigate("/tokendata");
    } else navigate("/login");
  }, [loggedindata.status]);

  return (
    <div>
      <br />
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignitems: "center",
        }}
      >
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={loginuser.email}
              onChange={(e) => {
                handlechange(e);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              password
            </label>
            <input
              type="password"
              class="form-control"
              name="password"
              value={loginuser.password}
              onChange={(e) => {
                handlechange(e);
              }}
            />
          </div>

          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              handlesubmit(loginuser);
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <br />
      Not a member yet?
      <div class="nav-item">
        <Link to="/registration" className="nav-link link-dark px-2">
          Register Now
        </Link>
      </div>
    </div>
  );
};
export default Login;
