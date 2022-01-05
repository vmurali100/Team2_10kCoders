import React, { Component } from 'react'
import {connect} from "react-redux"
export class Cricket extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
       cricketers:state.cricketPlayers 
    }
}

export default connect(mapStateToProps)(Cricket)