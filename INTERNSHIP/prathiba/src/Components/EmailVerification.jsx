import React,{useState} from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { emailVerification } from '../Redux/Actions'


 const EmailVerification = ({state1,emailver}) => {
     let navigate = useNavigate()
    let dispatch = useDispatch()
    console.log(state1)
    const [logincode, setlogincode] = useState("")
    const handlecode = ()=>{
         console.log(logincode)
        dispatch(emailver(logincode))
        navigate("/")
      }

  return (
    <div>
        <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
          <form>
  <div class="mb-3">
    <input type="email" className="form-control"  placeholder='Enter Your Code' 
    onChange={(e)=>{setlogincode(e.target.value)}}/>
  </div>
   <button type="button" className="btn btn-primary" onClick={()=>{handlecode()}}>Check Code</button></form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        state1:state
    }
}

const mapDispatchToProps = ()=>{
    return{
        emailver:emailVerification
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmailVerification)