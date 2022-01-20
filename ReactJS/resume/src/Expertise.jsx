import axios from "axios";
import React, { useEffect, useState }  from "react";

export const Expertise = ()=>{
    const [expertisedata , setExpertisedata] = useState([])
    useEffect(()=>{
      axios.get("http://localhost:3000/expertise").then(({data})=>{
        setExpertisedata(data)
      })
    },[])
    return <div>
        {console.log(expertisedata)}
         <section className="py-5" id="expertise">
      <div className="container py-5">
        <header className="mb-5 pb-4">
          <p className="fw-bold text-primary text-uppercase letter-spacing-3">Batman would be jealous.</p>
          <h2 className="text-uppercase lined">Expertise</h2>
        </header> <br />
        <div className="row gy-5">
             {expertisedata.map((e)=>{
                return  <div className="col-md-6">
                 <h3 className="h4"><span className="text-primary me-2">{e.id}</span>{e.caption}</h3> ;
                <p className="text-muted text-sm ms-4 ps-3">{e.description}</p>
                </div>
              }) }
              
            
          {/* <div className="col-md-6">
            <h3 className="h4"><span className="text-primary me-2">02</span>Copywriter</h3>
            <p className="text-muted text-sm ms-4 ps-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..</p>
          </div>
          <div className="col-md-6">
            <h3 className="h4"><span className="text-primary me-2">03</span>Web Design</h3>
            <p className="text-muted text-sm ms-4 ps-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..</p>
          </div>
          <div className="col-md-6">
            <h3 className="h4"><span className="text-primary me-2">04</span>Web Development</h3>
            <p className="text-muted text-sm ms-4 ps-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..</p>
          </div> */}
        </div>
      </div>
    </section>
    </div>
}