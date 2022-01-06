import React, { Component } from 'react'
import { connect } from 'react-redux'

class Albums extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Albums Titles</h3>
                {this.props.albums.map((alb) => {
                    return <p key={alb.title}>{alb.title}</p>
                })}

            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        albums : state.albums
    }
}
export default connect(mapStateToProp)(Albums)