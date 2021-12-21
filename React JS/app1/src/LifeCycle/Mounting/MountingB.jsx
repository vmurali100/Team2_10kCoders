import React, { Component } from 'react'
import UnmountingB from '../Unmounting/UnmoutingB'
import UpdatingB from '../Updating/UpdatingB'


export default class MountingB extends Component {
    constructor(props) {
        super(props)

        this.state = {

             count:0
        }
        console.log("Hello from Constructor Mounting - B")
    }

    increase=()=>{
        this.setState({count:this.state.count+1})

    }
    render() {
        console.log("Hello From Render Mounting - B")

        return (
            <div>
                <h2 style={{color:'blue'}}>Hello From LifeCycle Component  {this.props.count}</h2>
                <button onClick={this.increase}>Increase Count</button>
                <UpdatingB count={this.state.count}/>
                <hr /> <hr />
                {this.state.count < 3 && <UnmountingB/>}
                <hr /><hr/>
            </div>
        )
    }
}