import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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

    const handleSubmit = async () => {
        let admins = await getAllUsers();
        if (admins.length == 0) {
            alert("You Are not Admin...");
            navigate("/addDistrict");
        } else {
            alert("Try Once");
        }
    }


    const getAllUsers = () => {
        axios.get("http://localhost:3000/admin").then((res) => {
           let response=(res.data);
        });
    
    }
    return (
    <div style={{ backgroundColor: "pink", width: "900px" }} className="container"><br />
        <h2 style={{ color: 'black', textAlign: "center" }}> Admin Login</h2> <br />
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                            User Name
                        </label>
                        <input
                            placeholder="User Name"
                            type="text"
                            class="form-control"
                            value={admin.username}
                            name="username"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                            Email address
                        </label>
                        <input
                            placeholder="Email"
                            type="email"
                            class="form-control"
                            value={admin.email}
                            name="email"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                            Password
                        </label>
                        <input
                            placeholder="Password"
                            type="password"
                            class="form-control"
                            value={admin.password}
                            name="password"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>

                    <button style={{ marginBottom: "30px" }} type="button" class="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button><br />
                </form>
            </div>
            <div className="col"></div>
        </div>
    </div>
);
}
