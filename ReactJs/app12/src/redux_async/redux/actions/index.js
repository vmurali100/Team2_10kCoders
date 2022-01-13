import { GET_ALL_DATA } from "./actiontypes"
import axios from "axios"
export function getAllFilltext3Action(){
    return(dispatch)=>{
        axios.get("https://filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true ").then(res=>{
            console.log(res.data)
            dispatch({
                type:GET_ALL_DATA,
                payload:res.data
            })
        })
    }
}