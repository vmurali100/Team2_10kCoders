import React, { Component } from 'react'
import { connect } from 'react-redux'

class SideCharacters extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.SideCharacters.map((sid)=>{
                    return <p key={sid}>{sid}</p>
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
         Sidecharacters:state.Sidecharacters
    }
}

export default connect(mapStateToProps)(SideCharacters)