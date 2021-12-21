import React, { Component } from 'react'
import UnmountingA from '../Unmounting/UnmoutingA'
import UpdatingA from '../Updating/UpdatingA'


export default class MountingA extends Component {
    constructor(props) {
        super(props)

        this.state = {

             count:0
        }
        console.log("Hello from Constructor Mounting - A")
    }

    increase=()=>{
        this.setState({count:this.state.count+1})

    }
    render() {
        console.log("Hello From Render Mounting - A")

        return (
            <div>
                <h2 style={{color:'red'}}>Hello From LifeCycle Component  {this.props.count}</h2>
                <button onClick={this.increase}>Increase Count</button>
                <UpdatingA count={this.state.count}/>
                <hr /> <hr />
                {this.state.count < 3 && <UnmountingA/>}
                <hr /><hr/>
            </div>
        )
    }
}