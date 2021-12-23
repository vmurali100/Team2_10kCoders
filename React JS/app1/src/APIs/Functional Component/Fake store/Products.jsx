import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Products = () => {
    const [products, setProducts] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://fakestoreapi.com/products" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setProducts(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>Fake Store API<span style={{color:'green'}}>"Products"</span></h1>

    {products.map((product)=>{
         return <li key={products}><span style={{color:'red', font:'italic'}}> Title :  </span>{product.title}</li>
       })}
    </ol>
   </div>
}