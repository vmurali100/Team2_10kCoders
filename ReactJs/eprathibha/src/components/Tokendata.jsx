import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { examlistaction } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
const Tokendata = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let tokendata = JSON.parse(localStorage.getItem("loggedindata"))
  const id = tokendata.data.Id;
  const tokenu = tokendata.data.Token;
  const server_key = "3w99V63pW7tJ7vavGXtCKo8cp"
  useEffect(() => {
    if (tokendata.status === 200) {
      dispatch(examlistaction({ id, tokenu, server_key }))
    }
  }, [tokendata.status])
  const examlistdata = useSelector(state => state.examlist)
  useEffect(() => {
    if (examlistdata.status === 200) {
      localStorage.setItem("examlistdata", JSON.stringify(examlistdata))
      navigate("/startexam")
    }
  }, [examlistdata.status])
  return (
    <div style={{ textAlign: 'center', marginTop: '200px', color: 'blue' }}>
      <h3 >page is loading.......</h3>
    </div>
  )
}
export default Tokendata