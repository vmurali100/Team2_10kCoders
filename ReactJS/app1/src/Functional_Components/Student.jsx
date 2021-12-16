import React, { useState } from "react";

export const Student = () => {
  const [student, setstudent] = useState({
    id: 327,
    email: "OReyes@tortor.gov",
    username: "QDabbs",
    password: "C9dUE",
  });

  const hanldeRemove = (val)=>{
    let newStudent = {...student}
    delete newStudent[val]
    setstudent(newStudent)
  }
  return (
    <div>
      {/* <ul>
          <li>{student.id}</li>
          <li>{student.email}</li>
          <li>{student.username}</li>
          <li>{student.password}</li>
      </ul> */}
      {/* <ul>
        {Object.keys(student).map((val) => {
          return <li key={val}>{val} : {student[val]}</li>;
        })}
      </ul> */}
        {Object.keys(student).map((val) => {
          return <p key={val} onClick={()=>{hanldeRemove(val)}}>{val} : {student[val]}</p>;
        })}
        {Object.keys(student).length === 0 && <p>Object is Completely deleted</p>}
    </div>
  );
};
