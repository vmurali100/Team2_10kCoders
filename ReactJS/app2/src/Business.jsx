import React, { useState } from "react";
export const Bussiness = ()=>{
    const [worker,setworker]=useState(["srikanth","Bheem","Sridhar","Rahul"])
    const deleteWorker =(worker)=>{
        let workerDetails =worker.filter((wrk)=>wrk!==worker)
        setworker(workerDetails)
    }
    return<div>
        <workers allWorkers={worker} handleDelete={deleteWorker}/>
    </div>
}
