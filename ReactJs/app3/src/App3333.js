import React, { useState } from "react";
export const Employees=()=>{
      const [employees,setemployees]=useState(["Xyz","Yzx","Zxy","Xty"])
    return(
    <div>
<ul>
    {employees.map((emp)=>{
        return <li key={emp
        }>{emp}</li>
    })}
</ul>
    </div>
    )
}

