
import axios from "axios";
import React, { useEffect, useState }  from "react";
import {Link} from 'react-router-dom' ; 


export const Home = () => {
const [hdata , setHdata] = useState({})
    useEffect(()=>{
      axios.get("http://localhost:3000/home").then(({data})=>{
          setHdata(data)
      })
    },[])
return <div>
      {console.log(hdata)}
    <section className="hero bg-cover bg-center py-5" id="hero" style={{background: "url(img/author.jpg)"}}>
      <div className="container py-5 my-5 z-index-20 position-relative">
        <div className="row py-lg-5 mt-5">
          <div className="col-md-8 text-white">
            <h2 className="h4 text-primary fw-normal mb-0">Hi, I am</h2>
            <h1 className="text-uppercase text-xl mb-0">Akhil <span className="text-primary">Ankathi</span></h1>
            <h2 className="h4 fw-normal mb-5">{hdata.role}</h2>
            <p className="text-shadow">{hdata.des}</p>
          </div>
        </div>
      </div>
    </section>
</div>
}