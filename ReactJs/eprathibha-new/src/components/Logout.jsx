import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const examfinish = useSelector((state) => state.finishexamdata);

  const handlelogout = () => {
    navigate("/login");
  };

  return (
    <div>
      <div>
        <nav class="py-2 bg-light border-bottom">
          <div class="container d-flex flex-wrap">
            <ul class="nav me-auto"></ul>
            <ul class="nav">
              <h4 class="nav-item">
                <Link to="/startexam" className="nav-link link-dark px-2">
                  homescreen
                </Link>
              </h4>
            </ul>
          </div>
        </nav>
      </div>
      <h2 style={{ color: "green", marginTop: "200px" }}>{examfinish.data}</h2>
    </div>
  );
};
export default Logout;
