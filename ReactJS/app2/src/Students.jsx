import React from 'react'

export const Students = (props) => {
    return (
        <div>
            {props.allStudents.map((student)=>{
                return <p key={student}>{student} <button onClick={()=>{props.handleDelete(student)}}>Delete</button></p>
            })}
        </div>
    )
}
