import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
export const Education=()=>{
  const[educationlinks,setEducationlinks]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/educationlinks").then((res)=>{
      console.log(res.data)
      setEducationlinks(res.data)
    })
  },[])

    return <div>
         <section className="py-5 bg-light" id="education">
         {educationlinks.map((edu)=>
      
      <div className="container py-5">
        <header className="mb-5 pb-4">
          <p className="fw-bold text-primary text-uppercase letter-spacing-3">{edu.p1}</p>
          <h2 className="text-uppercase lined">{edu.h1}</h2>
        </header>
        <ul className="timeline">
              <li className="timeline-item ms-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row gx-0 gy-4">
                  <div className="col-lg-5">
                    <p className="fw-bold mb-2 text-primary text-sm">{edu.p2[0]} </p>
                    <h2 className="h5 mb-0 text-uppercase">{edu.h2[0]}</h2>
                    <p className="text-sm mb-0">{edu.p3[0]}</p><span className="small text-muted">{edu.s1[0]}</span>
                  </div>
                  <div className="col-lg-7">
                    <p className="text-muted">{edu.p4[0]}</p>
                  </div>
                </div>
              </li>
              <li className="timeline-item ms-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row gx-0 gy-4">
                  <div className="col-lg-5">
                    <p className="fw-bold mb-2 text-primary text-sm">{edu.p2[1]} </p>
                    <h2 className="h5 mb-0 text-uppercase">{edu.h2[1]}</h2>
                    <p className="text-sm mb-0">{edu.p3[1]}</p><span className="small text-muted">{edu.s1[1]}</span>
                  </div>
                  <div className="col-lg-7">
                    <p className="text-muted">{edu.p4[1]}</p>
                  </div>
                </div>
              </li>
              <li className="timeline-item ms-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row gx-0 gy-4">
                  <div className="col-lg-5">
                    <p className="fw-bold mb-2 text-primary text-sm">{edu.p2[2]}</p>
                    <h2 className="h5 mb-0 text-uppercase">{edu.h2[2]}</h2>
                    <p className="text-sm mb-0">{edu.p3[2]}</p><span className="small text-muted">{edu.s1[2]}</span>
                  </div>
                  <div className="col-lg-7">
                    <p className="text-muted">{edu.p4[2]}</p>
                  </div>
                </div>
              </li>
        </ul>
      </div>
         )}
    </section>
    </div>
}