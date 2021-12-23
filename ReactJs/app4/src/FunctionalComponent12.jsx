import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FunctionalComponent12() {
    const [datas,setdatas] = useState([])
    useEffect(()=>{
        let URL = "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
        axios.get(URL).then(({data})=>{
            setdatas(data)
        })
    },[])

    return(
        <div>
            <h1>FUNCTIONAL COMPONENT 12</h1>
            <ul>
                {datas.map((data)=>
                <li key={data.id} >{data.username}</li>    
                )}
            </ul>
        </div>
    )
}
