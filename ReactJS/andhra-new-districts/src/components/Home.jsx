import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Home = (props) => {
    const { loggedIn, setLoggedIn } = props;
    const [dist, setDist] = useState([]);
    const [input, setInput] = useState("");
    const [ans, setAns] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3000/districts").then((res) => {
            setDist(res.data);
        })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:3000/users").then((res) => {
            console.log("users:", res.data);
            localStorage.setItem("users", JSON.stringify(res.data));
        })
    }, [])

    let flag = false;
    function handleInput(e) {
        setInput(e.target.value);
        setAns("")
    }

    function handleButton() {
        if (loggedIn) {
            let district = dist.find(d => d.constituencies.indexOf(input.toLowerCase()) > -1)
            if (district !== undefined) {
                setAns(district.districtName)

            }
            else {
                setAns("Invalid")
            }
            setInput("");
        }
        else
        {
            alert("your are not logged in, Please Login");
            navigate("/login");

        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">


                    {/* Search box */}
                    <div className="col-md-5 mx-auto">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" value={input} placeholder="Search with Assembly constituencies name" onChange={handleInput} />
                            <button className="btn btn-outline-success" type="button" onClick={() => handleButton()}>Find District</button>
                        </form>
                        <div className='row' style={{ marginTop: 50 + "px" }}>

                            {
                                (ans !== "Invalid" && ans !== "") && <p className='App'>Your new district is <strong>{ans}</strong></p>
                            }



                        </div>

                    </div>

                </div>
                <div className='row'>
                    {/* displaying all the districts and their constistencies */}
                    <div className="col App">
                        <h2 style={{ textDecoration: "underline", color: "grey", fontSize: "25px", marginTop: 50 + "px" }}><em>List of new districts and their Assembly constituencies</em></h2>
                        {/* {
                        dist.map((d, i) => {
                            return (<div>
                                <h4 key={i}>{d.districtName}</h4>
                                {
                                    d.constituencies.map((c, i) => {
                                        return <p key={c}>{c}</p>
                                    })
                                }
                            </div>)
                        })
                    } */}
                        <table className='table'>
                            {
                                dist.map((d, i) => {
                                    return (<tbody>
                                        <tr>
                                            <th key={i}>{d.districtName}</th>
                                        </tr>
                                        <tr>
                                            {
                                                d.constituencies.map((c, i) => {
                                                    return <td key={c}>{c}</td>
                                                })
                                            }
                                        </tr>
                                    </tbody>)
                                })
                            }

                        </table>

                    </div>
                </div>
            </div>

        </div>
    );
};
