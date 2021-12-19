import React from 'react'

export const Studentss=(props)=>{
    return <div>
        {props.allStudents.map((student)=>{
            return <p>{student} <button onClick={()=>{props.handleDelete(student)}}>Delete</button></p>
        })}
    </div>

}