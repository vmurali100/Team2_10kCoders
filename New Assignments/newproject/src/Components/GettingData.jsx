import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { getDataAction } from '../Redux/actions'

const GettingData = ({state,getData}) => {
    let dispatch = useDispatch()
   const handleBtn = ()=>{
    dispatch(getData())
   }
  return (
    <div>JUST SOME MATTER
        <button onClick={handleBtn}>Get Data</button>
        {console.log("Displaying Data in Component",state)}
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {state:state}
}
const mapDispatychToProps = ()=>{
return { getData:getDataAction}
}
export default connect(mapStateToProps,mapDispatychToProps)(GettingData)
