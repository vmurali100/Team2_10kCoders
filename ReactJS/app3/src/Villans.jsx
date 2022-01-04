import React, { Component } from 'react'
import { connect } from 'react-redux'

class Villans extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.students.map((vil)=>{
                    return <p key={vil}>{vil}</p>
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
         Villans:state.Villans
    }
}

export default connect(mapStateToProps)(Villans)