import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Questionpaper = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const examstarts = JSON.parse(localStorage.getItem("examstart"))
    console.log(examstarts) 
    const Quespap=examstarts.data.exam
    console.log(Quespap)
    const handlefinish=()=>{
      navigate("/finish")
    }
    
  return (
    <div>
                   <div class="header" style={{position:'fixed',left:'0',top:'0',width:'100%',backgroundColor:'skyblue'}}>

        <h4>Questionpaper</h4>
      </div>
      <br/><br/><br/>
          <div style={{textAlign:'left'}}>
            {Quespap.map((pap) => {
            return (
                <>
                <ol >
                    <li style={{fontSize:'18px',listStyle:'outside'}}  dangerouslySetInnerHTML={{__html:pap.Question.question.above}}></li></ol>
                    
 <ol style={{fontSize:'18px',fontWeight:'bold'}}>
                    <li dangerouslySetInnerHTML={{__html:pap.Question.option1}}></li>
                    <li dangerouslySetInnerHTML={{__html:pap.Question.option2}}></li>
                    <li dangerouslySetInnerHTML={{__html:pap.Question.option3}}></li>
                    <li dangerouslySetInnerHTML={{__html:pap.Question.option4}}></li>
</ol>

                </>)
        })} 
           </div>
           <div class="footer" style={{position:'fixed',left:'0',bottom:'0',width:'100%',backgroundColor:'skyblue'}}>
        <button type="button" className='btn btn-danger' onClick={()=>{handlefinish()}}>Submit</button>
        </div>
    </div>
  )
}
export default Questionpaper