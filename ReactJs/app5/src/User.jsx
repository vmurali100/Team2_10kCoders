import React,{useState} from "react"
export const User=()=>{
    const[fname,setfname]=useState("");
    const handleInput=(e)=>{
        console.log(e.target.value)
        setfname(e.target.value)
    }
    return(
        <div>
            <form>
                <label htmlFor="fname">FirstName:</label>
                <input type="text"
                name="fname"
                value={fname}
                onChange={(e)=>{handleInput(e)}}/>
                <button>getuser</button>
            </form>
        </div>
    )
}