import React,{useState} from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate, useNavigationType } from 'react-router-dom'
import { finishExamAction, getExamAction, startExamAction, userInfoAction } from '../Redux/Actions'

const ProfilePage = ({state}) => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const [truval, settruval] = useState(false)
    const [printuser, setprintuser] = useState(false)
    const [tokenvals, settokenvals] = useState({Id:"",Token:""})
    const [btndisplay, setbtndisplay] = useState(false)
    const [examdisplay, setexamdisplay] = useState(false)

    const handleuserinfo = async()=>{
        // Directly updated before Changing into Another State because it Changes state when it dispatches userInfoAction
        //   which gives new state
        settokenvals({Id:state.Id,Token:state.Token})
        await dispatch(userInfoAction(state))
        settruval(true)
    }

    const startexam = async()=>{

        console.log("token Vals",tokenvals)
        await dispatch(getExamAction(tokenvals))
        setbtndisplay(true)

    }

    const handleStartExam= ()=>{
        console.log("Token Vals",tokenvals)
        dispatch(startExamAction(tokenvals))
        setexamdisplay(true)
      }

      const endExam = async()=>{
          console.log("Ending Exam")
          await dispatch(finishExamAction(tokenvals))
          alert("Exam Has Finished")
          navigate("/loginpage")
      }
      

  return (
    <div style={{height:"300px"}}>
       {examdisplay ?<div>
           <h1>Exam Has Started</h1>
           <button type='button' className='btn btn-danger' onClick={endExam}>EndExam</button>
       </div>: <>
       
       {btndisplay ?  <div>
      <div className="container">
        <div className="row"></div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1 id='examPage1'>Online Exam</h1>
          </div>
          <div className="col"></div>
        <div className="row"></div>
      </div>
    </div>
    <div className="container">
              <div className="row">
                <div className="col"></div>
                <div className="col">
                  <button type="button" onClick={handleStartExam} className="btn btn-primary">Start Exam</button>
                </div>
                <div className="col"></div>
              </div>
            </div>
    </div>:
    <div>
         {printuser ? <div><h1>Hai {state.data.name}</h1> <h2>Your Mail Id is:{state.data.email}</h2> 
            <button onClick={startexam} className="btn btn-primary">Get Free Exam</button>
        </div>:  <button onClick={handleuserinfo}>UserInfo</button>}
        {/* {console.log("profile page",state)} */}
        {truval && <>{state.status==400||state.status==401||state == "E-mail is required"?
        <>{console.log("Please LogIn"),settruval(false),navigate("/loginpage")},{setprintuser(false),
            alert("Please Login with correct Credentials")}</>:
        <>{console.log(state.data)}    
        ,{settruval(false)},{setprintuser(true)}</>}</>}
    </div>
    }
       </>}

    </div>
  )
}

const mapStateToProps = (state)=>{
    return {state:state}
}
const mapDispatchToProps = ()=>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage)