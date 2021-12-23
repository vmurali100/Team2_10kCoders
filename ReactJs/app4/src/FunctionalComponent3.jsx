import axios from "axios";
import React,{useState,useEffect} from "react";

export const FunctionalComponent3= ()=>{
    const [users,setUsers] = useState([])
    useEffect(()=>{
        let URL = "https://fakestoreapi.com/users"
        axios.get(URL).then(({data})=>{
            setUsers(data)
        })
    },[])

    return(
        <div>
            <h1>FUNCTIONAL COMPONENT 3</h1>
            <ul>
                {users.map((user)=>
                <li key={user.id}>{user.username}</li>    
                )}
            </ul>
        </div>
    )
}