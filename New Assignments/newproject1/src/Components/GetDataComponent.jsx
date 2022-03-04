import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { getDataAction } from '../Redux/Actions'

const GetDataComponent = ({getData}) => {
    let dispatch = useDispatch()
  return (
    <div>
        <h1>Getting Data</h1>
        <button onClick={dispatch(getData)}>GEt DAta</button>
    </div>
  )
}
const mapStateToProps = (state)=>{
    return {
        state:state
    }
}
const mapDispatchToProps = ()=>{
   return {
    getData : getDataAction
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetDataComponent)
