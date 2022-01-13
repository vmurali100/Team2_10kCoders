import { GET_ALL_ALBUMS } from "./actiontypes"
import axios from "axios"

export function getAllAlbumsAction(){
    return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/albums").then(res=>{
            console.log(res.data)
            dispatch({
                type:GET_ALL_ALBUMS,
                payload:res.data
            })
        })
    }
}