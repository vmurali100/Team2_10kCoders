import React, { Component } from 'react'
import { connect } from "react-redux"

export class API1data extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>JUST DISPLAY</h1>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        api1data:state.api1data
    }
}

export default connect(mapStateToProps)(API1data)
