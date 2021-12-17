import React,{useState} from 'react'

export const User = () => {
    const [fname, setfname] = useState("");
    const handleInput =(e)=>{
        console.log(e.target.value)
        setfname(e.target.value)
    }
    return (
        <div>
            <form>
            <label htmlFor="fname">First Name : </label>
            <input type="text" 
                name="fname"  
                value={fname} 
                onChange={(e)=>{handleInput(e)}}/>
            <button>Get User</button>
        </form>            
        </div>
    )
}
