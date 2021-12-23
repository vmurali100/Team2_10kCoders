import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Products = () => {
    const [products,setproducts] = useState([]);

    useEffect(() => {
        let Product_URL = 'https://fakestoreapi.com/products';
        axios.get(Product_URL).then((data) => {
            console.log(data);

            setproducts(data);

        });
    }, []);
    return (
        <div>
            <h2>Fake Store API Carts </h2>
            <ul>
                {products.map((product) => {
                    return (
                        <li>
                        <img src={product.image}  alt="" />  
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};