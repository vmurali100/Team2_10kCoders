import React  from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EndExamAction } from "../Redux/Actions";

const Startexam =(props)=>{
  let navigate = useNavigate()
    const {examqtions , endExamFunc} = props
    let tokendata = examqtions[0]
    let exams = examqtions.startexam.exam
    console.log(exams)
    console.log(tokendata)
    return <div>
        <h1>start exams</h1>
        <div>{examqtions !=null ?exams.map((e)=>{
            console.log(e)
          for (var a in e){
            // console.log(a)
            // if( a !="Exam" && a != "Examstat")
            {
                console.log(a)
            return <>
            
            <div className="container">
                                    <div class="card" style={{width: "250px"}}>
                                 <div class="card-body">
                                    <h5 class="card-title">{e.a}</h5>
                                   <button type="button" onClick={()=> endExamFunc( tokendata , ()=>(navigate("/endexam")))} class="card-title">{a}</button>
                                    <h5 class="card-title">{a}</h5>
                                   {/* <h6 class="card-subtitle mb-2 text-muted">Exam No :{f[0].id}</h6>
                                   <p class="card-text">{f[0].start_date}</p> */}
                                   {/* <button  class="card-link" onClick={()=> startExamFunc(tokendata , ()=> navigate("startexam"))}>Start Exam</button> */}
                                   <a  class="card-link">Another link</a>
                                  </div>
                               </div></div>
            </>
            }
            //  if( a!="Exam" && a!="Examstat") {

            //   }
            }}):
              ""}</div> 
    </div>
}

const MSTP =(state)=>{
    return {
        examqtions :state
    }
}
const MDTP =(dispatch)=>{
  return {
    endExamFunc : (tokendata , x)=>dispatch(EndExamAction(tokendata , x))
  }
}

export default connect(MSTP ,MDTP)(Startexam)