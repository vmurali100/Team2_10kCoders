import React, { useState } from "react";
// import { Students } from "./Students";

export const ClassRoom = () => {
  const [students, setStudents] = useState(["Narendra", "Ram", "Teja", "Srikanth"]);

  const deleteStudent=(student)=>{
    let studentsDetails = students.filter((std)=>std !== student)
    setStudents(studentsDetails)
  }
  return <div>
      {/* <Students allStudents={students} handleDelete={deleteStudent}/> */}
  </div>;
};
