import React,{useState} from 'react'
export const Employees=()=>{
    const[employees,setemployees]=useState({
        'name':'Raamu',
        'id':120,
        'username':"Raaamu",
        'password':'123raamu'
    })
    const handleRemove=(val)=>{
        var newEmployees={...employees}
        delete newEmployees[val]
        setemployees(newEmployees)
    }
    return <div>
        <ul>
            {Object.keys(employees).map((val)=>{
                return <p onClick={()=>{handleRemove(val)}}>{val}:{employees[val]}</p>
            })}
        </ul>
    </div>
}