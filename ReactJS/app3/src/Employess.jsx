import React, { Component } from 'react'
import { connect } from 'react-redux'

class Employess extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.Employess.map((emp)=>{
                    return <p key={emp}>{emp}</p>
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
         Employess:state.Employess
    }
}

export default connect(mapStateToProps)(Employess)