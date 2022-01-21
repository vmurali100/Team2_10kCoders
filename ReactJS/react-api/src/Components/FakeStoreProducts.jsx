import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"


export const FakeStoreProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProducts(res.data);
        })
    }, [])
    return (
    <div>
        <h1>Fake Store Products</h1>
        <table className="table">
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Image</th>
            </tr>
        </thead>

        <tbody>
            {
                products.map((obj)=>{
                    return <tr>
                        {
                            Object.keys(obj).filter(o => o !== "id" && o !== "rating").map((key)=>
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
