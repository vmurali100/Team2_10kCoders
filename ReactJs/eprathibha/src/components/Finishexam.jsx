import React from 'react'
import { finishexamaction } from '../redux/actions';
import { useState, useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

const Finishexam = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const tokendata = JSON.parse(localStorage.getItem("loggedindata"))
    const examId = JSON.parse(localStorage.getItem("examid"))
    const id = tokendata.data.Id;
    const tokenu = tokendata.data.Token;
    const server_key = "3w99V63pW7tJ7vavGXtCKo8cp"
    useEffect(() => {
        if (tokendata.status === 200) {
            dispatch(finishexamaction({ id, tokenu, server_key,examId }))
    console.log()
    
        }
    
      }, [tokendata.status])
      const examfinish = useSelector(state => state.finishexamdata)
    
      useEffect(() => {
        if (examfinish.status=== 200) {
          localStorage.setItem("examfinish", JSON.stringify(examfinish))

          alert(examfinish.data.data)
          navigate("/logout")

        }
       

      }, [examfinish.status])
     

  return (
    <div>
        <h3 style={{textAlign:'center',marginTop:'200px',color:'blue'}}>Exam is submitting....</h3>
    </div>
  )
}
export default Finishexam