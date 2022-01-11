import React, { Component } from 'react';
import { connect } from 'react-redux';

class Students extends Component {
    render(props) {
        console.log(this.props)
        return (
            <div>
                {this.props.students.map((student)=>{
                    return <p key={student}>{student}</p>
                })}
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {students: state.students}
}

export default connect(mapStateToProps)(Students);