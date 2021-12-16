import React, { useState } from 'react'

export const Student = () => {
    const [student, setstudent] = useState({
        'name': 'Harish',
        "id": 101,
        'userName': 'Hari',
        'password': 'hari123'
    })
    const handleRemove = (val) => {
    var newStudent={...student}
        delete newStudent[val]
        setstudent(newStudent)
    }
    return <div>
        <ul>
            {/* <li>{student.name}</li>
            <li>{student.id}</li>
            <li>{student.userName}</li>
            <li>{student.password}</li> */}

            {Object.keys(student).map((val) => {
                return <li onClick={()=>{handleRemove(val)}}>{val} : {student[val]}</li>
            })}
            {Object.keys(student).length === 0 && <p>Objects is completely Deleted</p>}
        </ul>
    </div>
}