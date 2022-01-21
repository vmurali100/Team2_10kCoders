import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const FakeStoreCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/carts").then((res) => {
            setCart(res.data);
        })
    }, [])
    return (
    <div>
        <h1>Fake Store Carts</h1>
        <table className="table">
        <thead>
            <tr>
                <th scope="col">UserId</th>
                <th scope="col">Date</th>
            </tr>
        </thead>

        <tbody>
            {
                cart.map((obj)=>{
                    return <tr>
                        {
                            Object.keys(obj).filter(o => o !== "id" && o !== "products" && o !== "__v").map((key)=>
                            {
                                console.log(key)
                                return <td key={obj[key]}>{obj[key]}</td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    </table>
    </div>);

};
