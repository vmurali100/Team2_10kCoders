import React, { Component } from 'react'
import { connect } from 'react-redux'

class API2Data extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                  {this.props.api2datas.map((std)=>{
                   for(var i in std){
                       return <p>{std[i]}</p>
                   }
                })}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        api2datas:state.api2data
    }
}

export default connect(mapStateToProps)(API2Data)
