import axios from "axios";
import React, { useEffect, useState }  from "react";
export  const Experience = ()=>{

    const [experienceData , setExperienceData] = useState([]) ; 
    useEffect(()=>{
        axios.get(" http://localhost:3000/experience").then(({data})=>{
            setExperienceData(data)
        })
    },[])
    return <div>
          {console.log(experienceData)}
         <section class="py-5" id="experience">
      <div class="container py-5">
        <header class="mb-5 pb-4">
          <p class="fw-bold text-primary text-uppercase letter-spacing-3">Yes. I've been around.</p>
          <h2 class="text-uppercase lined">Experience</h2>
        </header>
   
        <ul class="timeline">
          {experienceData.map((e)=>{
              <li class="timeline-item ms-3 pb-4">
              <div class="timeline-arrow"></div>
              <div class="row gx-0 gy-4">
                <div class="col-lg-5">
                  <p class="fw-bold mb-2 text-primary text-sm">{e.year}</p>
                  <h2 class="h5 mb-0 text-uppercase">{e.company}</h2>
                  <p class="text-sm mb-0">{e.role}</p><span class="small text-muted">{e.location}</span>
                </div>
                <div class="col-lg-7">
                  <p class="text-muted">{e.des}</p>
                </div>
              </div>
            </li>
          })}
             
            
              {/* <li class="timeline-item ms-3 pb-4">
                <div class="timeline-arrow"></div>
                <div class="row gx-0 gy-4">
                  <div class="col-lg-5">
                    <p class="fw-bold mb-2 text-primary text-sm">2014 - 2010 </p>
                    <h2 class="h5 mb-0 text-uppercase">Facebook inc.</h2>
                    <p class="text-sm mb-0">Senior Interface Designer</p><span class="small text-muted">Portland, OR</span>
                  </div>
                  <div class="col-lg-7">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                  </div>
                </div>
              </li>
             
              <li class="timeline-item ms-3 pb-4">
                <div class="timeline-arrow"></div>
                <div class="row gx-0 gy-4">
                  <div class="col-lg-5">
                    <p class="fw-bold mb-2 text-primary text-sm">2009 - 2010 </p>
                    <h2 class="h5 mb-0 text-uppercase">Google inc.</h2>
                    <p class="text-sm mb-0">Senior Interface Designer</p><span class="small text-muted">Portland, OR</span>
                  </div>
                  <div class="col-lg-7">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
                  </div>
                </div>
              </li> */}
        </ul>
      </div>
    </section>
    </div>
}