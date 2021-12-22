import React, { useState } from "react"
export const Student=()=>{
    const[student,setstudent]=useState({
    "id": 55091,
    "email": "JHickey@libero.net",
    "username": "MMagano",
    "password": "Rw1fc",
    });
    const handleRemove=(val)=>{
        console.log("handleRemove called...",val)
        let newStudent={...student}
        delete newStudent[val]
        setstudent(newStudent)
    }
    return(
        <div>
          {/* <ul>
              <li>{student.id}</li>
              <li>{student.email}</li>
              <li>{student.username}</li>
              <li>{student.password}</li>
              </ul>   */}
<ul>
{Object.keys(student).map((val)=>{
    return <li key={val} onClick={()=>{handleRemove(val)}}>{val}:{student[val]}</li>;
})}
{Object.keys(student).length===0&&<p>object is completely deleted</p>}
</ul>
        </div>
    )
}