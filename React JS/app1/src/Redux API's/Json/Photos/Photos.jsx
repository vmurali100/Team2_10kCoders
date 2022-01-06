import React, { Component } from 'react'
import { connect } from 'react-redux'

class Photos extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Photos Title</h3>
                {this.props.photos.map((p) => {
                    return <p key={p.title}>{p.title}</p>
                })}

            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        photos : state.photos
    }
}
export default connect(mapStateToProp)(Photos)