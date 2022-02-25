import React,{useState} from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate, useNavigationType } from 'react-router-dom'
import { getExamAction, userInfoAction } from '../Redux/Actions'

const ProfilePage = ({state}) => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const [btndisplay, setbtndisplay] = useState(true)
    const [truval, settruval] = useState(false)
    const [printuser, setprintuser] = useState(false)
    const [tokenvals, settokenvals] = useState({Id:"",Token:""})

    const handleuserinfo = async()=>{
        // Directly updated before Changing into Another State because it Changes state when it dispatches userInfoAction
        //   which gives new state
        settokenvals({Id:state.Id,Token:state.Token})
        await dispatch(userInfoAction(state))
        settruval(true)
    }

    const startexam = ()=>{
        console.log("token Vals",tokenvals)
        dispatch(getExamAction(tokenvals))
       
        
    }

  return (
    <div style={{height:"300px"}}>
        {printuser ? <div><h1>Hai {state.data.name}</h1> <h2>Your Mail Id is:{state.data.email}</h2> 
            <button onClick={startexam}>StartExam</button>
        </div>:  <button onClick={handleuserinfo}>UserInfo</button>}
        {/* {console.log("profile page",state)} */}
        {truval && <>{state.status==400||state.status==401||state == "E-mail is required"?
        <>{console.log("Please LogIn"),settruval(false),navigate("/loginpage")},{setprintuser(false),
            alert("Please Login with correct Credentials")}</>:
        <>{console.log(state.data)}    
        ,{settruval(false)},{setprintuser(true)}</>}</>}
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