import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
export const Footer=()=>{
  const[footerlinks,setFooterlinks]=useState([])
  useEffect(()=>{
axios.get("http://localhost:3000/footerlinks").then((res)=>{
  console.log(res.data)
  setFooterlinks(res.data)
})
  },[])
    return <div>
        {footerlinks.map((ft)=>
          <footer className="pt-5">
        
      <div className="container text-center py-5">
        <div className="row px-4">
          <div className="col-lg-7 mx-auto">
            <h2 className="text-uppercase mb-0">{ft.h1} </h2>
            <h6 className="text-primary text-uppercase mb-0 letter-spacing-3">{ft.h2}</h6>
            <p className="text-muted my-4">{ft.p1}</p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a className="social-link" href="#!"><i className="fab fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a className="social-link" href="#!"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a className="social-link" href="#!"><i className="fab fa-linkedin-in"></i></a></li>
              <li className="list-inline-item"><a className="social-link" href="#!"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrights px-4">
        <div className="container py-4 border-top text-center">
          <p className="mb-0 text-muted py-2">&copy;{ft.p2} <a href="https://bootstrapious.com/p/bootstrap-resume">{ft.p3}</a>. </p>
        </div>
      </div>
    </footer>
        )}
    </div>
}