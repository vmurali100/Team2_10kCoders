import { GET_ALL_PRODUCTS } from "./actiontypes"
import axios from "axios"

export function getAllProductsAction(){
    return(dispatch)=>{
        axios.get("https://fakestoreapi.com/products").then(res=>{
            console.log(res.data)
            dispatch({
                type:GET_ALL_PRODUCTS,
                payload:res.data
            })
        })
    }
}