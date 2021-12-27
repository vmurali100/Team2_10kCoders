import React, { useState,useEffect } from "react";

import axios from "axios";
export const Fk12=()=>{
    const[carts,setCarts]=useState([]);
    useEffect(()=>{
        let ccURL="https://fakestoreapi.com/carts"
        axios.get(ccURL).then(({data})=>{
            console.log(data);
            setCarts(data);
        });
    },[])
    const handleDelete=(cart)=>{
        console.log(cart);
        let balanceCarts=carts.filter((crt)=>crt.id!==cart.id);
        setCarts (balanceCarts);
    }
    return(
        <div>
            <h2>carts</h2>
            <ul>
                {carts.map((cart)=>{
                    return(
<li>
{cart.date}

    <button onClick={()=>{
        handleDelete(cart);
    }}
    >delete date
    </button>
    </li>
                    );
                })}
            </ul>
        </div>
    )
}