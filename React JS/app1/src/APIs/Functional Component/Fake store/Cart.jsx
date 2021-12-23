import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Cart = () => {
    const [products,setproducts] = useState([]);

    useEffect(() => {
        let Cart_URL = 'https://fakestoreapi.com/products';
        axios.get(Cart_URL).then((data) => {
            console.log(data);

            setproducts(data);

        });
    }, []);
    return (
        <div>
            <h2>Fake Store API<span style={{ color: 'green' }}>"Carts"</span></h2>
            <ul>
                {products.map((product) => {
                    return (
                        <li><span style={{ color: 'red', font: 'italic' }}> Id:</span> <img src={product.id}  alt="" /></li>
                    );
                })}
            </ul>
        </div>
    );
};