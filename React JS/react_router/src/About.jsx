import axios from "axios";
import React, { useEffect, useState }  from "react";

export const About = ()=>{
    const [abData , setAbdata] = useState({}) ;
    useEffect(()=>{
axios.get("http://localhost:3000/about").then(({data})=>{
    setAbdata(data)
})
    },[])
    return <div>
         {console.log(abData)}
         <section className="py-5 bg-light" id="about">
      <div className="container py-5">
        <header className="mb-5">
          <p className="fw-bold text-primary text-uppercase letter-spacing-3">{abData.title}</p>
          <h2 className="h3 lined">To boost your creative projects</h2>
        </header>
        <p className="lead text-muted">Lorem ipsum dolor sit amet, <strong className="text-dark">consetetur sadipscing elitr, </strong> sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
        <p className="text-muted">{abData.p1} </p>
        <p className="text-muted mb-0">{abData.p2}</p>
      </div>
    </section>
    </div>
}