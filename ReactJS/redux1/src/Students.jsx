import React, { Component } from 'react';
import {connect} from "react-redux"

class Students extends Component {
    render(props) {
        console.log(this.props)
        return (
            <div>
                <h1>Students</h1>
                {this.props.students.map((student)=>{
                    return (
                        <p key={student}>{student}</p>
                    )
                }) }
            </div>
        );
    }
}
function mapStatetoProps(state)
{
    return {students: state.students};
}

export default connect(mapStatetoProps)(Students);