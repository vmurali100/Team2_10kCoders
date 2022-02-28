import axios from "axios"
import { Get_ALL_Users } from "./actionTypes"

export function getAllUserAction(){
return(dispatch)=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{dispatch({
        
          type:Get_ALL_Users,
          payload:res.data
    })
})
}
}