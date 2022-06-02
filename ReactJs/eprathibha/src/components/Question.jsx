import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate ,useParams} from 'react-router-dom'
import { startexamaction } from '../redux/actions'

const Question = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(useParams())
    const {examId}=useParams()

    localStorage.setItem("examid",JSON.stringify(examId)) 

    const tokendata = JSON.parse(localStorage.getItem("loggedindata"))
    const id = tokendata.data.Id;
    const tokenu = tokendata.data.Token;
    const server_key = "3w99V63pW7tJ7vavGXtCKo8cp"
    useEffect(() => {
        if (tokendata.status === 200) {
            dispatch(startexamaction({ id, tokenu, server_key,examId }))
        }
    
      }, [tokendata.status])
      const examstart = useSelector(state => state.startexamdata)
      
      useEffect(() => {
        if (examstart.status === 200) {
    localStorage.setItem("examstart",JSON.stringify(examstart)) 
    navigate("/questionpaper")
        }
      }, [examstart.status])
    
  return (
    <div>
<h3 style={{textAlign:'center',marginTop:'200px',color:'blue'}}>Wait.... Question paper is loading.....</h3>
    </div>
  )
}
export default Question 