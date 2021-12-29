import React, { useEffect, useState } from "react";
import axios from "axios";

function Movieactors() {
    var [actors, setActors] = useState([]);
    var options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: { q: actors },
        headers: {
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            'x-rapidapi-key': '5161a87238msh66f2fb6f826c7bfp127ccbjsnc26a8ad8dc1c'
        }
    };

    useEffect(()=>{
        axios.request(options).then(function (response) {
            setActors(response.data.d)
            console.log(response.data.d)
            setActors(response.data.d)
        })
    })

    function maheshBabu()
    {
        console.log("clicked mahesh");
        setActors("Mahesh babu")
    }
    function pavanKalyan()
    {
        console.log("clicked pavan Kalyan");
        setActors("Pawan Kalyan")
    }
    function ntr()
    {
        console.log("clicked pavan Kalyan");
        setActors("NTR")
    }
    function prabhas()
    {
        console.log("clicked prabhas")
        setActors("Prabhas")
    }
    function alluArjun()
    {
        console.log("clicked Allu Arjun")
        setActors("Allu Arjun")
    }
    return (
        <div>
            <h1>Click Any Actor Button to get Details</h1>
            <button onClick={maheshBabu}>Mahesh Babu</button>
            <button onClick={pavanKalyan}>Pavan Kalyan</button>
            <button onClick={ntr}>NTR</button>
            <button onClick={prabhas}>Prabhas</button>
            <button onClick={alluArjun}>Allu arjun</button>
            <ul>
                <li>{console.log(actors[0])}</li>
            </ul>
        </div>
    );
}

export default Movieactors;