import React from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userInfoAction } from '../Redux/Actions'

const ProfilePage = ({state}) => {
    let dispatch = useDispatch()

    const handleuserinfo = ()=>{
        dispatch(userInfoAction(state))
    }
  return (
    <div>
        {console.log("profile page",state)}
        <button onClick={handleuserinfo}>UserInfo</button>
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