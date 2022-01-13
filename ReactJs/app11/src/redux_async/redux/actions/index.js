import { GET_ALL_DATA } from "./actiontypes"
import axios from "axios"

export function getAllFilltext2Action(){
    return(dispatch)=>{
        axios.get(" https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true ").then(res=>{
            console.log(res.data)
            dispatch({
                type:GET_ALL_DATA,
                payload:res.data
            })
        })
    }
}