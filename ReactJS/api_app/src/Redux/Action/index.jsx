import axios from "axios"
import { GET_API_DATA } from "./Action_type"

export  const getApiDataAction =()=>{
  return (dispatch)=>{
    var fData
    axios.get("https://jsonplaceholder.typicode.com/todos").then(({data})=>{
              console.log(data)
              fData=data 
              dispatch( {
                type : GET_API_DATA ,
                payload : fData
             })
          })

  }
} 
