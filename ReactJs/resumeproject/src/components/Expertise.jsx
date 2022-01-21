import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
export const Expertise=()=>{
  const[expertiselinks,setExpertiselinks]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/expertiselinks").then((res)=>{
console.log(res.data)
setExpertiselinks(res.data)
    })
  },[])
    return <div>
        <section className="py-5" id="expertise">
        {expertiselinks.map((expr)=>

      <div className="container py-5">
        <header className="mb-5 pb-4">
          <p className="fw-bold text-primary text-uppercase letter-spacing-3">{expr.p1}</p>
          <h2 className="text-uppercase lined">{expr.h1}</h2>
        </header>
        <div className="row gy-5">
          <div className="col-md-6">
            <h3 className="h4"><span className="text-primary me-2">{expr.h4[0]}</span>{expr.h2[0]}</h3>
            <p className="text-muted text-sm ms-4 ps-3">{expr.h3[0]}</p>
          </div>
          <div className="col-md-6">
            <h3 className="h4"><span className="text-primary me-2">{expr.h4[1]}</span>{expr.h2[1]}</h3>
            <p className="text-muted text-sm ms-4 ps-3">{expr.h3[1]}</p>
          </div>
          <div className="col-md-6">
            <h3 className="h4"><span className="text-primary me-2">{expr.h4[2]}</span>{expr.h2[2]}</h3>
            <p className="text-muted text-sm ms-4 ps-3">{expr.h3[2]}</p>
          </div>
          <div className="col-md-6">
            <h3 className="h4"><span className="text-primary me-2">{expr.h4[3]}</span>{expr.h2[3]}</h3>
            <p className="text-muted text-sm ms-4 ps-3">{expr.h3[3]}</p>
          </div>
        </div>
      </div>
        )}
    </section>
    </div>
}