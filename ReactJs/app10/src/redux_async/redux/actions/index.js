import { GET_ALL_DATA } from "./actiontypes"
import axios from "axios"

export function getAllFilltext1Action(){
    return(dispatch)=>{
            axios.get(" https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true ").then(res=>{
            console.log(res.data)
            dispatch({
                type:GET_ALL_DATA,
                payload:res.data
            })
        })
    }
}