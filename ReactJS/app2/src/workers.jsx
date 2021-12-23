import React from "react";
export const workers =(props)=>{
    return(
        <div>
            {props.allWorkers.map((worker)=>{
                return <p> {worker} <button onClick={()=>{props.handleDelete(worker)}}>Delete</button></p>
            })}
        </div>
    )
}