import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../Images/prathiba-logo.webp"
import { Exam_List_Action, Remove_Token_Action, User_Data_Action } from '../Redux/actions';

export const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.token.data.status);

    console.log("header-token", token);

    const [userLoggedIn, setIsUserLoggedIn] = useState();
    useEffect(() => {
        let ls = JSON.parse(localStorage.getItem("loginStatus"))

        if (ls === null) {
            ls = 0;
        }
        if (ls === 200) {
            const data = JSON.parse(localStorage.getItem("loginDetails"));
            console.log("profile token data", data);
            dispatch(User_Data_Action(data));
            dispatch(Exam_List_Action(data));
            setIsUserLoggedIn(true);
        }
        else {
            setIsUserLoggedIn(false);
        }
        console.log("useEffect  token", token, ls);
    }, [token])



    const handleLogout = () => {
        localStorage.removeItem("loginStatus");
        localStorage.removeItem("loginDetails");
        localStorage.removeItem("userDetails");
        localStorage.removeItem("examList");
        localStorage.removeItem("startExam");
        dispatch(Remove_Token_Action());
        navigate("/");
    }


    return (
        <div className="wrapper">
            <div className="container cont">
                <img src={logo} alt="logo" />
                {
                    !userLoggedIn
                    &&
                    <ul className="nav justify-content-end">
                        {/* <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><button className="btn btn-primary">Login</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register"><button className="btn btn-primary">Register</button></Link>
                        </li>
                    </ul>
                }
                {
                    userLoggedIn
                    &&
                    <ul className="nav">
                        <li className="nav-item ml-3">
                            <Link to="/exam-list"><button className="btn btn-primary">Exam List</button></Link>
                        </li>
                        <li className="nav-item ml-3">
                            <Link to="/profile"><button className="btn btn-primary">Profile</button></Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                }
            </div>
        </div>

    )
}
