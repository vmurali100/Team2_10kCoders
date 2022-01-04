import React, { Component } from 'react'
import { connect } from 'react-redux'

class Producers extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.Producers.map((ptd)=>{
                    return <p key={ptd}>{ptd}</p>
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
         Producers:state.Producers
    }
}

export default connect(mapStateToProps)(Producers)