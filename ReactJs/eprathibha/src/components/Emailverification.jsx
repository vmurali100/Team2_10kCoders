import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { verifyaction } from '../redux/actions'

const Emailverification = () => {
  const navigate=useNavigate()
  const verifieddata=useSelector(state=>state.verifydata)
  console.log("hello from verify",verifieddata)
  let dispatch=useDispatch()
  const[regcode,setregcode]=useState({
    "reg_code":""
  })
  useEffect(() => {
    if(verifieddata.status===200){
      alert("email verified successfully, login to continue")
      navigate("/login")
    }else if(verifieddata.status===400){
      alert("enter correct verification id")

      navigate("/emailverification")
      
    }
  
   
  }, [verifieddata.status])
  const handlechange=(e)=>{
    let newcode={...regcode}
    newcode[e.target.name]=e.target.value
setregcode(newcode)
  }
  const handlesubmit=(regcode)=>{
    console.log(regcode)
    dispatch(verifyaction(regcode))

  }
  return (
    <div>
    <br/>
    <div style={{display:'grid',justifyContent:'center',alignitems:'center'}}>
          <form>

  <div class="mb-3"  >

    <label for="exampleInputEmail1" class="form-label">Email verification</label>
    <input type="email" class="form-control" name="reg_code"  value={regcode.reg_code} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <button type="button" class="btn btn-primary" onClick={()=>handlesubmit(regcode)}>Submit</button>

  </form>
    </div>
</div>
  )
}
export default Emailverification