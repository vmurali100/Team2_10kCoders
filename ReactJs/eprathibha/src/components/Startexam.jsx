import React, { useEffect,useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Startexam = () => {
    const navigate = useNavigate()
    let examdata = JSON.parse(localStorage.getItem("examlistdata"))
    const handleclick = () => {
        navigate("/question")
        
   }
const paper = examdata.data.exams;
    return (
        <div>
            <nav class="py-2 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
    
      </ul>
      <ul class="nav">
      <h4 class="nav-item"><Link to="/login" className="nav-link link-dark px-2">Logout</Link>
</h4>
      </ul>
    </div>
  </nav>      
          
            <h2 style={{ color: 'blue' }}>Welcome To Homescreen</h2>    
               
            <br />
            <div>
                <br/>
                <h2 style={{ color: 'blueviolet' }}>Question Papers</h2>
            </div>
            <br/>
            <div>
                {paper.map((pap) => {
                    for (var a in pap) {
                        return (<>
                            <h3 style={{ color: 'gray' }}>{a}</h3>
                            {pap[a].map((pa) => {
                                return <h5 style={{ color: 'green' }} onClick={() => { handleclick() }}>{pa.Exam.name}</h5>
                            })}
                        </>)
                    }
                })}

            </div>
            <br /><br />
            <div class="footer" style={{ position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor: 'skyblue' }}>
                <h5>@eprathibha</h5>
            </div>
        </div>
    )
}
export default Startexam