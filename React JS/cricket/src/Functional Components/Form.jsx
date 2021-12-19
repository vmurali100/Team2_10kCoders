import React, {useState} from 'react'

export const Form = ()=>{
    const[fname,setfname]=useState('')

    const handleInput=(e)=>{
        console.log(e.target.value)
        setfname(e.target.value)
        
    }
    return <div>
        <form>
            <label htmlFor="fname">First name</label>
            <input type="text" name="fname" value={fname} onChange={(e)=>{handleInput(e)}}/><br/>
            <button>Get Users</button>
        </form>
    </div>
}