import React, { Component } from 'react'
import UnmountingD from '../Unmounting/UnmoutingD'
import UpdatingD from '../Updating/UpdatingD'



export default class MountingD extends Component {
    constructor(props) {
        super(props)

        this.state = {

             count:0
        }
        console.log("Hello from Constructor Mounting - D")
    }

    increase=()=>{
        this.setState({count:this.state.count+1})

    }
    render() {
        console.log("Hello From Render Mounting - D")

        return (
            <div>
                <h2 style={{color:'blue'}}>Hello From LifeCycle Component {this.props.count}</h2>
                <button onClick={this.increase}>Increase Count</button>
                <UpdatingD count={this.state.count}/>
                <hr /><hr />
                {this.state.count < 3 && <UnmountingD/>}
                <hr /><hr />
            </div>
        )
    }
}