import { GET_ALL_PHOTOS } from "./actiontypes"
import axios from "axios"

export function getAllPhotosAction(){
    return(dispatch)=>{
        axios.get(" https://jsonplaceholder.typicode.com/photos ").then(res=>{
            console.log(res.data)
            dispatch({
                type:GET_ALL_PHOTOS,
                payload:res.data
            })
        })
    }
}