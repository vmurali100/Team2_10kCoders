import axios from "axios";
import React,{useState,useEffect} from "react";

export const FunctionalComponent2 = ()=>{
    const [carts,setCarts] = useState([])
    useEffect(()=>{
        let URL = "https://fakestoreapi.com/carts"
        axios.get(URL).then(({data})=>{
            setCarts(data)
        })
    },[])

    return(
        <div>
            <h1>FUNCTIONAL COMPONENT 2</h1>
            <ul>
                {carts.map((cart)=>
                <li>{cart.id}</li>    
                )}
            </ul>
        </div>
    )
}