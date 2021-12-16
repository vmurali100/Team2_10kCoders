import React,{useState} from 'react'

export const Employees = ()=>{
    const[employees,setemployees]=useState(['Hari','Giri','Ravi','Suri','Maari'])
    return <div>
        <ul>
            {employees.map((emp)=>{
                return <h4>{emp}</h4>
            })}
        </ul>
    </div>
}