import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const About=()=>{
  const[aboutlinks,setAboutlinks]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/aboutlinks").then((res)=>{
console.log(res.data)
setAboutlinks(res.data)
    })
  },[])
    return <div>
        <section className="py-5 bg-light" id="about">
        {aboutlinks.map((ab)=>
      <div className="container py-5">
     
        <header className="mb-5">
          <p className="fw-bold text-primary text-uppercase letter-spacing-3">{ab.p1}</p>
          <h2 className="h3 lined">{ab.h1}</h2>
        </header>
        <p className="lead text-muted">{ab.p2}
         <strong className="text-dark">{ab.s1} </strong>{ab.p3}</p>
        <p className="text-muted">{ab.p4} </p>
        <p className="text-muted mb-0">{ab.p5}</p>
      
        </div>
        )}
    </section>
    </div>
}