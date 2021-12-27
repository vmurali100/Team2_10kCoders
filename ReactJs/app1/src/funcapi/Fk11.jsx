import React, { useState,useEffect } from "react";

import axios from "axios";
export const Fk11=()=>{
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        let ppURL="https://fakestoreapi.com/products"
        axios.get(ppURL).then(({data})=>{
            console.log(data);
            setProducts(data);
        });
    },[])
    const handleDelete=(product)=>{
        console.log(product);
        let balanceProducts=products.filter((prd)=>prd.id!==product.id);
        setProducts (balanceProducts);
    }
    return(
        <div>
            <h2>products</h2>
            <ul>
                {products.map((product)=>{
                    return(
<li>
<img style={{width:"150px",height:"150px"}} src={product.image}/>

    <button onClick={()=>{
        handleDelete(product);
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