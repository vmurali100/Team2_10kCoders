import React, { useEffect } from 'react'
import { useState } from 'react'

const Users = () => {
    const[use, setUse] = useState(0)
   
  return (
    <div>
      <h1>Users Component</h1>
      <h1>{use}</h1>
      <button onClick={()=>{setUse(use+1)}}>button</button>
    </div>
  )
}

export default Users
