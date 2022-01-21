import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
export const Experience=()=>{
  const[experiencelinks,setExperiencelinks]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/experiencelinks").then((res)=>{
console.log(res.data)
setExperiencelinks(res.data)
    })
  },[])
    return <div>
         <section className="py-5" id="experience">
         {experiencelinks.map((epx)=>

      <div className="container py-5">
        <header className="mb-5 pb-4">
          <p className="fw-bold text-primary text-uppercase letter-spacing-3">{epx.p1}</p>
          <h2 className="text-uppercase lined">{epx.h1}</h2>
        </header>
        <ul className="timeline">
              <li className="timeline-item ms-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row gx-0 gy-4">
                  <div className="col-lg-5">
                    <p className="fw-bold mb-2 text-primary text-sm">{epx.p2[0]} </p>
                    <h2 className="h5 mb-0 text-uppercase">{epx.h2[0]}</h2>
                    <p className="text-sm mb-0">{epx.p3[0]}</p><span className="small text-muted">{epx.s1[0]}</span>
                  </div>
                  <div className="col-lg-7">
                    <p className="text-muted">{epx.p4[0]}</p>
                  </div>
                </div>
              </li>
              <li className="timeline-item ms-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row gx-0 gy-4">
                  <div className="col-lg-5">
                    <p className="fw-bold mb-2 text-primary text-sm">{epx.p2[1]}</p>
                    <h2 className="h5 mb-0 text-uppercase">{epx.h2[1]}</h2>
                    <p className="text-sm mb-0">{epx.p3[1]}</p><span className="small text-muted">{epx.s1[1]}</span>
                  </div>
                  <div className="col-lg-7">
                    <p className="text-muted">{epx.p4[1]}</p>
                  </div>
                </div>
              </li>
              <li className="timeline-item ms-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row gx-0 gy-4">
                  <div className="col-lg-5">
                    <p className="fw-bold mb-2 text-primary text-sm">{epx.p2[2]}</p>
                    <h2 className="h5 mb-0 text-uppercase">{epx.h2[2]}</h2>
                    <p className="text-sm mb-0">{epx.p3[2]}</p><span className="small text-muted">{epx.s1[2]}</span>
                  </div>
                  <div className="col-lg-7">
                    <p className="text-muted">{epx.p4[2]}</p>
                  </div>
                </div>
              </li>
        </ul>
      </div>
         )}
    </section>
    </div>
}