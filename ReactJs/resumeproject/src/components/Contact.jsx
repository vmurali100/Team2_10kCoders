import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
export const Contact = () => {
    const[contactlinks,setContactlinks]=useState([])
    useEffect(()=>{
axios.get(" http://localhost:3000/contactlinks").then((res)=>{
    console.log(res.data)
setContactlinks(res.data)
})
    },[])
    return <div>
        <section className="bg-light py-5" id="contact">
        {contactlinks.map((cn)=>
            <div className="container py-5">
                <header className="mb-5 pb-4">
                    <p className="fw-bold text-primary text-uppercase letter-spacing-3">{cn.p1}</p>
                    <h2 className="text-uppercase lined">{cn.h1}</h2>
                </header>
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6"><a className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block" href="#!">
                        <i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                        <h4 className="contact-item-title h5 text-uppercase">{cn.h2}</h4>
                        <p className="text-sm mb-0"></p>{cn.p2}</a></div>
                    <div className="col-lg-3 col-md-6"><a className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block" href="tel:534456886"><i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                        <h4 className="contact-item-title h5 text-uppercase">{cn.h3}</h4>
                        <p className="text-sm mb-0">{cn.p3}</p></a></div>
                    <div className="col-lg-3 col-md-6"><a className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block" href="www.example.com"><i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                        <h4 className="contact-item-title h5 text-uppercase">{cn.h4}</h4>
                        <p className="text-sm mb-0"></p>{cn.p4}</a></div>
                    <div className="col-lg-3 col-md-6"><a className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block" href="mailto:info@example.com"><i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                        <h4 className="contact-item-title h5 text-uppercase">{cn.h5}</h4>
                        <p className="text-sm mb-0">{cn.p5}</p></a></div>
                </div>
            </div>
        )}
        </section>
    </div>
}