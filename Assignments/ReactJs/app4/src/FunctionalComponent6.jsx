import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FunctionalComponent6() {
    const [albums,setalbums] = useState([])
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/albums"
        axios.get(URL).then(({data})=>{
            setalbums(data)
        })
    },[])

    return(
        <div>
            <h1>FUNCTIONAL COMPONENT 6</h1>
            <ul>
                {albums.map((album)=>
                <li key={albums.title}>{album.id}</li>    
                )}
            </ul>
        </div>
    )
}
