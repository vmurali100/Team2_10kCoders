import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FunctionalComponent5() {
    const [comments,setcomments] = useState([])
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/comments"
        axios.get(URL).then(({data})=>{
            setcomments(data)
        })
    },[])

    return(
        <div>
            <h1>FUNCTIONAL COMPONENT 5</h1>
            <ul>
                {comments.map((comment)=>
                <li key={comment.id}>{comment.id}</li>    
                )}
            </ul>
        </div>
    )
}
