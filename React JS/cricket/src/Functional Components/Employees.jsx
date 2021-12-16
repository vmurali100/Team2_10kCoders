import React,{useState} from 'react'
export const Employees = ()=>{
    const[employees,setemployees]=useState(['Murali','Hari','Ravi'])
    return <div>
        <ul>
            {employees.map((emp)=>{
                return <h3>{emp}</h3>
            })}            
        </ul>
    </div>
}