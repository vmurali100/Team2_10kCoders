import axios from "axios";
import {useNavigate } from "react-router-dom";

import React, { useState } from "react";

export const AdminLogin = () => {
    let navigate = useNavigate();

    const [admin, setadmin] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        let newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setadmin(newAdmin);
    };

    const handleSubmit =  () => {
        console.log(admin);
        axios.post("http://localhost:3000/admin", admin).then(res => {
            alert("Admin Login Successful")
            navigate("/addDistrict")
        })
    }
    return (
        <div style={{ backgroundColor: "pink", width: "900px" }} className="container"><br />
            <h2 style={{ color: 'black', textAlign: "center" }}> Admin Login</h2> <br />
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label  className="form-label">
                                User Name
                            </label>
                            <input
                                placeholder="User Name"
                                type="text"
                                className="form-control"
                                value={admin.username}
                                name="username"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">
                                Email address
                            </label>
                            <input
                                placeholder="Email"
                                type="email"
                                className="form-control"
                                value={admin.email}
                                name="email"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Password
                            </label>
                            <input
                                placeholder="Password"
                                type="password"
                                className="form-control"
                                value={admin.password}
                                name="password"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </div>

                        <button style={{ marginBottom: "30px" }} type="button" className="btn btn-primary" onClick={handleSubmit}>
                            Submit
                        </button><br />
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}
