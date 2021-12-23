import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FunctionalComponent9() {
    const [photos,setphotos] = useState([])
    useEffect(()=>{
        let URL = "https://jsonplaceholder.typicode.com/photos"
        axios.get(URL).then(({data})=>{
            setphotos(data)
        })
    },[])

    return(
        <div>
            <h1>FUNCTIONAL COMPONENT 9</h1>
            <ul>
                {photos.map((photo)=>
                <li key={photo.id}><img src={photo.thumbnailUrl} alt="IMG NOT FOUND"></img></li>    
                )}
            </ul>
        </div>
    )
}
