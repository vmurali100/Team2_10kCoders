import React,{useState} from 'react'
import { Students } from './Students'

export const Classroom = ()=>{
    const [students,setstudents]=useState(['Hari','Giri',"Rachana",'Siri']);

        const deleteStudent=(student)=>{
            var studentDetails=students.filter((std)=> std !==student)
            setstudents(studentDetails)
        }
    return <div>
        <Students allStudents={students} handleDelete={deleteStudent}/>
    </div>
}