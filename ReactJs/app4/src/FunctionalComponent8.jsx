import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FunctionalComponent8() {
    const [users,setusers] = useState([])
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/users"
        axios.get(URL).then(({data})=>{
            setusers(data)
        })
    },[])

    return(
        <div>
            <h1>FUNCTIONAL COMPONENT 8</h1>
            <ul>
                {users.map((user)=>
                <li key={user.id}>{user.id}</li>    
                )}
            </ul>
        </div>
    )
}
