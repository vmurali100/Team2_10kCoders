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
    static getDerivedStateFromProps(props,state){
        console.log('I am from getDerivedStateFromProps Mounting -C', state,props)
        return null
    }

    increase=()=>{
        this.setState({count:this.state.count+1})

    }
    componentDidMount(){
        console.log("I am From Mounting - C")
    }
    render() {
        console.log("Hello From Render Mounting - C")

        return (
            <div>
                <h2 style={{color:'blue'}}>Hello From LifeCycle Component </h2>
                <button onClick={this.increase}>Increase Count</button>
                <UpdatingC count={this.state.count}/>
                <hr /><hr />
                {this.state.count < 3 && <UnmountingC/>}
                <hr /><hr />
            </div>
        )
    }
}