import axios from "axios"
import React,{useState,useEffect} from "react"
export  const FunctionComponent1 = ()=>{
    const[products,setProducts] = useState([])
    useEffect(()=>{
        let URL = "https://fakestoreapi.com/products"
        axios.get(URL).then(({data})=>{
            console.log(data)
            setProducts(data)
        })
    },[])
    return(
        <div>
            <ul>
                {products.map((product)=>{
                    return (
                        <li key={product.id}>{product.title}</li>
                    )
                })
                }
            </ul>
        </div>
    )
}