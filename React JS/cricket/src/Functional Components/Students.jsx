import React,{useState} from 'react'
export const Students=()=>{
    const[students,setstudents]=useState({
        'name':"Harish",
        'id':234,
        'username':'Hari Vardhan',
        'password':'vardhan123'
    })
    const handleRemove=(val)=>{
        var newStudents={...students}
        delete newStudents[val]
        setstudents(newStudents)
    }
    return <div>
        <ul>
            {Object.keys(students).map((val)=>{
             return  <p onClick={()=>{handleRemove(val)}}>{val}:{students[val]}</p>
            })}
            {Object.keys(students).length===0 && <p>The Object is Completely Deleted</p>}
        </ul>
    </div>
}