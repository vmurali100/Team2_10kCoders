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
    static getDerivedStateFromProps(props,state){
        console.log('I am from getDerivedStateFromProps Mounting -A', state,props)
        return null
    }

    increase=()=>{
        this.setState({count:this.state.count+1})

    }
    componentDidMount(){
        console.log("I am From Mounting - A")
    }
    render() {
        console.log("Hello From Render Mounting - A")

        return (
            <div>
                <h2 style={{color:'red'}}>Hello From LifeCycle Component</h2>
                <button onClick={this.increase}>Increase Count</button>
                <UpdatingA count={this.state.count}/>
                <hr /> <hr />
                {this.state.count < 3 && <UnmountingA/>}
                <hr /><hr/>
            </div>
        )
    }
}