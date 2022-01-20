import axios from "axios";
import React, { useEffect, useState }  from "react";

export const Education = () => {
    const [educationData , setEducationData] = useState([]) ; 
    useEffect(()=>{
        axios.get("http://localhost:3000/education").then(({data})=>{
            setEducationData(data)
        })
    },[])
  return (
    <div>
         {console.log(educationData)}
      <section className="py-5 bg-light" id="education">
        <div className="container py-5">
          <header className="mb-5 pb-4">
            <p className="fw-bold text-primary text-uppercase letter-spacing-3">
              Lazy isn't in my vocabulary.
            </p>
            <h2 className="text-uppercase lined">Education</h2>
          </header>

          <ul className="timeline">
              {educationData.map((e)=>{
                  return <li className="timeline-item ms-3 pb-4">
                   <div className="timeline-arrow"></div>
                   <div className="row gx-0 gy-4">
                     <div className="col-lg-5">
                       <p className="fw-bold mb-2 text-primary text-sm">
                       {e.year}
                       </p>
                       <h2 className="h5 mb-0 text-uppercase">
                       {e.course}
                       </h2>
                       <p className="text-sm mb-0">{e.university}</p>
                       <span className="small text-muted">{e.location}</span>
                     </div>
                     <div className="col-lg-7">
                       <p className="text-muted">
                        {e.des}
                       </p>
                     </div>
                   </div>
                 </li>

              })}
           

            {/* <li className="timeline-item ms-3 pb-4">
              <div className="timeline-arrow"></div>
              <div className="row gx-0 gy-4">
                <div className="col-lg-5">
                  <p className="fw-bold mb-2 text-primary text-sm">
                    Jan 2000 - Feb 2000{" "}
                  </p>
                  <h2 className="h5 mb-0 text-uppercase">UI/UX Workshop.</h2>
                  <p className="text-sm mb-0">IT Academy</p>
                  <span className="small text-muted">Portland, OR</span>
                </div>
                <div className="col-lg-7">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-item ms-3 pb-4">
              <div className="timeline-arrow"></div>
              <div className="row gx-0 gy-4">
                <div className="col-lg-5">
                  <p className="fw-bold mb-2 text-primary text-sm">
                    1998 - 1999{" "}
                  </p>
                  <h2 className="h5 mb-0 text-uppercase">Web Development.</h2>
                  <p className="text-sm mb-0">IT Academy</p>
                  <span className="small text-muted">Portland, OR</span>
                </div>
                <div className="col-lg-7">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea.
                  </p>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </section>
    </div>
  );
};