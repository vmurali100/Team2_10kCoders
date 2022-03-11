import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { dataAction, getData2Action } from '../Redux/Actions'


const GetData = ({state1,dataAct,dataAct1}) => {
    let dispatch = useDispatch()
    const getDatFun = async()=>{
        await dispatch(dataAct())
        console.log("state1",state1)
    }
   
    const getDatFun2 = async ()=>{
        await dispatch(dataAct1())
        console.log("state2",state1)
    }

  return (
    <div>
        <button onClick={getDatFun}>Get DATA</button>
        <button onClick = {getDatFun2}>Get Data2</button>
    </div>
  )
}
const MDTP = (state)=>{
    return {state1:state}
}
const MDTA= ()=>{
    return {
        dataAct:dataAction,
        dataAct1:getData2Action
    }
}
export default connect(MDTP,MDTA)(GetData)