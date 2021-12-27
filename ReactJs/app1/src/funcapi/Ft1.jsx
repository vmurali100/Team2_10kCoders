import React, { useState,useEffect } from "react";

import axios from "axios";
export const Ft1=()=>{
    const[userss,setUserss]=useState([]);
    useEffect(()=>{
        let ffURL="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true"
        axios.get(ffURL).then(({data})=>{
            console.log(data);
            setUserss(data);
        });
    },[])
    const handleDelete=(use)=>{
        console.log(use);
        let balanceUserss=userss.filter((us)=>us.id!==use.id);
        setUserss (balanceUserss);
    }
    return(
        <div>
            <h2>filltxt1</h2>
            <ul>
                {userss.map((use)=>{
                    return(
<li>
    {use.fname}
    <button onClick={()=>{
        handleDelete(use);
    }}
    >delete user
    </button>
    </li>
                    );
                })}
            </ul>
        </div>
    )
}