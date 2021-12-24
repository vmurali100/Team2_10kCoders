import axios from "axios";
import React, {  useState,useEffect } from "react";
export const Search = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        let Fake_Text_URL = 'https://fakestoreapi.com/products';
        axios.get(Fake_Text_URL).then(({ data }) => {
    console.log(data)
    setproducts(data);
})
    }, [])
return (
    <div>
        <h2>users component</h2>
        <ul>
            {products.map((product) => {
                return (
                    <li>
                        <img src={product.image} alt="" />
                    </li>
                )
            })}
        </ul>
    </div>
);
        }
