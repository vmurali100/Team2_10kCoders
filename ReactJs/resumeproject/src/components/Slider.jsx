import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Slider = () => {
  const[sliderlinks,setSliderlinks]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/sliderlinks").then((res)=>{
console.log(res.data)
setSliderlinks(res.data)
    })
  },[])
    return <div>
          <section className="hero bg-cover bg-center py-5" id="hero"
                  style={{background: "url(./img/author.jpg)"}}>
              {sliderlinks.map((sl)=>
      <div className="container py-5 my-5 z-index-20 position-relative">
        <div className="row py-lg-5 mt-5">
          <div className="col-md-8 text-white">
            <h2 className="h4 text-primary fw-normal mb-0">{sl.h1}</h2>
            <h1 className="text-uppercase text-xl mb-0">{sl.h2} <span className="text-primary">{sl.h3}</span></h1>
            <h2 className="h4 fw-normal mb-5">{sl.h4}</h2>
            <p className="text-shadow">{sl.p}</p>
          </div>
        </div>
      </div>
              )}
    </section>
    </div>
}