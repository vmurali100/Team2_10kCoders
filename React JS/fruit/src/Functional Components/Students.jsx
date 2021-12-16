import React, {useState} from 'react'
export const Students=()=>{
    const [students,setstudents]=useState(['Ravi','Ramu','Latha','Geetha'])
    return <div>
        <ul>
            {students.map((stud)=>{
               return <h3>{stud}</h3>
            })}
        </ul>
    </div>
}