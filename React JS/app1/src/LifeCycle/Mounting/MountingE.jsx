import React, { Component } from 'react'
import UnmountingE from '../Unmounting/UnmoutingE'
import UpdatingE from '../Updating/UpdatingE'


export default class MountingE extends Component {
    constructor(props) {
        super(props)

        this.state = {

             count:0
        }
        console.log("Hello from Constructor Mounting - E")
    }
    static getDerivedStateFromProps(props,state){
        console.log('I am from getDerivedStateFromProps Mounting -E', state,props)
        return null
    }

    increase=()=>{
        this.setState({count:this.state.count+1})

    }
    componentDidMount(){
        console.log("I am From Mounting - E")
    }
    render() {
        console.log("Hello From Render Mounting - E")

        return (
            <div>
                <h2 style={{color:'blue'}}>Hello From LifeCycle Component </h2>
                <button onClick={this.increase}>Increase Count</button>
                <UpdatingE count={this.state.count}/>
                <hr /><hr/>
                {this.state.count < 3 && <UnmountingE/>}
                <hr /><hr/>
            </div>
        )
    }
}