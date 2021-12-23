import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FunctionalComponent10() {
    const [datas,setdatas] = useState([])
    useEffect(()=>{
        let URL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=trues"
        axios.get(URL).then(({data})=>{
            setdatas(data)
        })
    },[])

    return(
        <div>
            <h1>FUNCTIONAL COMPONENT 10</h1>
            <ul>
                {datas.map((data)=>
                <li key={data.lname} >{data.lname}</li>    
                )}
            </ul>
        </div>
    )
}
