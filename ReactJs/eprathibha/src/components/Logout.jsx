import React from 'react'
import { useNavigate,Link} from 'react-router-dom'

 const Logout = () => {
   const navigate=useNavigate();
  //  setInterval(() => {
  //   window.location.reload();
  // }, 1000);
  const finishdata = JSON.parse(localStorage.getItem("examfinish"))
  const examstarts = JSON.parse(localStorage.getItem("examstart"))
  return (
    <div>
      <div>
      <nav class="py-2 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
    
      </ul>
      <ul class="nav">
        <h4 class="nav-item"><Link to="/login" className="nav-link link-dark px-2">logout</Link>
</h4>
<h4 class="nav-item"><Link to="/startexam" className="nav-link link-dark px-2">homescreen</Link>
</h4>
      </ul>
    </div>
  </nav>       
      </div>
    <div>
   
          <h3 style={{textAlign:'center',marginTop:'200px',color:'blue'}}>{finishdata.data.data}</h3>
          <h3 style={{textAlign:'center',marginTop:'200px',color:'blue'}}>{examstarts.alert}</h3>


          </div>
          </div>
  )
}
export default Logout
