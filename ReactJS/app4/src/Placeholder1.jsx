import React, {useEffect, useState} from "react";
import axios from "axios";

function Placeholder1()
{
    const url = "http://jsonplaceholder.typicode.com/comments"
    const [product, setProduct] = useState();

    useEffect(()=>{
        axios.get(url).then(({data})=>{
            console.log(data);
        })
        
    },[]);
    return <div>
    <h1>Placeholder component</h1>
    </div>
}
export default Placeholder1;