import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
    const [dist, setDist] = useState([]);
    const [input,setInput] = useState("");
    const [ans,setAns] = useState("");
    useEffect(() => {
        axios.get("http://localhost:3000/districts").then((res) => {
            setDist(res.data);
        })
    }, [])


    let flag = false;
    function handleInput(e)
    {
        setInput(e.target.value);
        setAns("")
    }

    function handleButton()
    {
        let district = dist.find(d=>d.constituencies.indexOf(input.toLowerCase()) > -1 )
        if(district !== undefined)
        {
            setAns(district.districtName)

        }
        else{
            setAns("Invalid")
        }
        setInput("");
    }
    
    return (<div>
        <div className="container">
            <div className="row">


                {/* Search box */}
                <div className="col">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" value={input} placeholder="Search with Assembly constituencies name" onChange={handleInput}/>
                        <button className="btn btn-outline-success" type="button" onClick={()=>handleButton()}>Find District</button>
                    </form>
                    <div className='row' style={{marginTop: 50+"px" }}>
                    
                        {
                            (ans !=="Invalid" && ans !=="") && <p>Your new district is <strong>{ans}</strong></p>
                        }
                         
                    
                            
                    </div>

                </div>







                {/* displaying all the districts and their constistencies */}
                <div className="col-6 App">
                    <h2 style={{textDecoration: "underline", color:"grey",fontSize: "25px"}}><em>List of new districts and their Assembly constituencies</em></h2>
                    {
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
                    }
                </div>
            </div>
        </div>

    </div>);
};
