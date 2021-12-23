import axios from "axios";
import { useEffect, useState } from "react"

const EmployeeFunc =() => {
const [employee , setEmployee] = useState([]);


useEffect(()=>{
let URL = "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
axios.get(URL).then(({data})=>{
 setEmployee(data)
})} ,[]) ;

return <div>
    <h1>FILLEXT - EMPLOYEE(FUNCTION)</h1>
    <ol>
        {employee.map((emp)=>{
            return  <li>{emp.email}</li>
        })}
    </ol>
</div>
}
export default  EmployeeFunc ;

//  fill text person +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const PersonFunc =() => {
    const [employee , setEmployee] = useState([]);
    
    
    useEffect(()=>{
    let URL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
    axios.get(URL).then(({data})=>{
     setEmployee(data)
    })} ,[]) ;
    
    return <div>
        <h1>FILLEXT - PERSON(FUNCTION)</h1>
        <ol>
            {employee.map((emp)=>{
                return  <li>{emp.address}</li>
            })}
        </ol>
    </div>
    }

//  fill text name +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export const NameFunc =() => {
        const [employee , setEmployee] = useState([]);
        
        
        useEffect(()=>{
        let URL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true"
        axios.get(URL).then(({data})=>{
         setEmployee(data)
        })} ,[]) ;
        
        return <div>
            <h1>FILLEXT - NAME(FUNCTION)</h1>
            <ol>
                {employee.map((emp)=>{
                    return  <li>{emp.fname}</li>
                })}
            </ol>
        </div>
        }
   