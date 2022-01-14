import axios from "axios"
import { GET_DATA, GET_EMPLOYEE, GET_NAME } from "./Action-types"

export  const getDataAction = ()=>{
    var personData 
 return  (dispatch)=>  axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true").then(({data})=>{
        personData =  data
    //    console.log (personData)
    dispatch({
        type : GET_DATA ,
        payload : personData
    })
    })
   
}

export  const getFnameAction = ()=>{
    var name
 return  (dispatch)=>  axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true").then(({data})=>{
        name =  data
    //    console.log (personData)
    dispatch({
        type : GET_NAME ,
        payload : name
    })
    })
   
}
export  const getEmployeeAction = ()=>{
    var employee
 return  (dispatch)=>  axios.get("http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then(({data})=>{
    employee =  data
    //    console.log (personData)
    dispatch({
        type : GET_EMPLOYEE ,
        payload : employee
    })
    })
   
}