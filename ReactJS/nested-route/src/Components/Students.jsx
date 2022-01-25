import React from 'react';
import { useState } from 'react';

export const Students = () => {
    const [students, setStudents] = useState(["Ervin","Ravi","Ganesh","Karthik","Bala"])
  return (<div>
        {
            students.map(
                (student)=>{
                    return <p key={student}>{student}</p>
                }
            )
        }
  </div>);
};
