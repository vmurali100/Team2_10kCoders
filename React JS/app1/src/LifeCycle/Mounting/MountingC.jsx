import React, { Component } from 'react'
import UnmountingC from '../Unmounting/UnmoutingC'
import UpdatingC from '../Updating/UpdatingC'



export default class MountingC extends Component {
    constructor(props) {
        super(props)

        this.state = {

             count:0
        }
        console.log("Hello from Constructor Mounting - C")
    }

    increase=()=>{
        this.setState({count:this.state.count+1})

    }
    render() {
        console.log("Hello From Render Mounting - C")

        return (
            <div>
                <h2 style={{color:'blue'}}>Hello From LifeCycle Component  {this.props.count}</h2>
                <button onClick={this.increase}>Increase Count</button>
                <UpdatingC count={this.state.count}/>
                <hr /><hr />
                {this.state.count < 3 && <UnmountingC/>}
                <hr /><hr />
            </div>
        )
    }
}