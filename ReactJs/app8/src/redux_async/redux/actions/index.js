import { GET_ALL_CARTS } from "./actiontypes"
import axios from "axios"

export function getAllCartAction(){
    return(dispatch)=>{
        axios.get(" https://fakestoreapi.com/carts ").then(res=>{
            console.log(res.data)
            dispatch({
                type:GET_ALL_CARTS,
                payload:res.data
            })
        })
    }
}