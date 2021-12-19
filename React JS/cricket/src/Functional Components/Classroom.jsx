import React,{useState} from 'react'
import { Studentss } from './Studentss'

export const Classroom = ()=>{
    const [students,setstudents]=useState(['Hari','Giri',"Rachana",'Siri']);

        const deleteStudent=(student)=>{
            var studentDetails=students.filter((std)=> std !==student)
            setstudents(studentDetails)
        }
    return <div>
        <Studentss allStudents={students} handleDelete={deleteStudent}/>
    </div>
}