import React,{useState} from 'react'
export const Hook = ()=>{
    const [myName,setmyName]=useState('Hook');
    
    return <div>
        <button onClick={()=>{setmyName('Hari')}}>Change Name</button>
        <h1>Hi, Im {myName} Component</h1>
    </div>
}