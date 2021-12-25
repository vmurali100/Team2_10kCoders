
import React , { useEffect, useState } from "react"
import axios from "axios"

const UserFunc = () =>{
    const [users, setUsers] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://fakestoreapi.com/users" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setUsers(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>FAKE STORE - USERS(FUNCTION)</h1>
    {users.map((user)=>{
         return <li key={user}>{user.username}</li>
       })}
    </ol>
   </div>
}
export default UserFunc ;
    
// export UserFunc ;
export const UserFuncPro = () =>{
    const [users, setUsers] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://fakestoreapi.com/products" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setUsers(data)
        })
    
    },[]) 
   
const handleDelete = (user)=>{
  let del =  users.filter((us)=> us !== user)
  setUsers(del)
}
    return <div>
    <ol>
    <h1>FAKE STORE - PRODUCTS(FUNCTION)</h1>
    {users.map((user)=>{
         return <li key={user}><img style={{"width":"150px"} , {"height": "150px"}} src={user.image} alt="" /> <button onClick={()=>{handleDelete(user)}}>DELETE</button></li>
       })}
    </ol>
   </div>
}
    

// 
export const  UserFuncCart = () =>{
    const [users, setUsers] = useState([]) ;
   
    useEffect(()=>{
        let URL = "https://fakestoreapi.com/carts" ;
        axios.get(URL).then(({data})=>{
            console.log(data)
            setUsers(data)
        })
    
    },[]) 
   

    return <div>
    <ol>
    <h1>FAKE STORE - CARTS(FUNCTION)</h1>
    {users.map((user)=>{
         return <li key={user}>{user.date}</li>
       })}
    </ol>
   </div>
}
    
