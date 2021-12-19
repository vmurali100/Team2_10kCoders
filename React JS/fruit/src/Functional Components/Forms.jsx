import React,{useState} from 'react' 

export const Forms=()=>{
    const[users,setusers]=useState({
        fname:'',
        lname:'',
        email:''
    });
    const handleInput=(e)=>{
      var newUser={...users}
      var inputName=e.target.name
      newUser[inputName]=e.target.value
      setusers(newUser)
    }
    const getUser=()=>{
        console.log(users)
        clear()
    }

    const clear=()=>{
        setusers({
            fname:'',
            lname:'',
            email:''})
    }
        
    return (
        <div>
            <form >
                <label htmlFor="fname">First Name : </label>
                <input type="text" name="fname" value={users.fname} onChange={(e)=>{handleInput(e)}} /><br/>
                <label htmlFor="lname">Last Name : </label>
                <input type="text" name="lname" value={users.lname} onChange={(e)=>{handleInput(e)}} /><br/>
                <label htmlFor="email">email : </label>
                <input type="email" name="email" value={users.email} onChange={(e)=>{handleInput(e)}} /><br/>
                <button type="button" onClick={getUser}>Get User</button>
            </form>
        </div>
    )
}