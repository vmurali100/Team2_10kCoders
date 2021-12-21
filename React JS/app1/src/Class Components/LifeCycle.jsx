import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 1
        }
        console.log("I am Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log('I am from getDerivedStateFromProps', state,props)
        return null
    }
    changeNumber = () => {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount(){
        console.log("I amn From component Did Mount")
    }
    render() {
        console.log("I am From Render")
        return (
            <div>
                <h2>Hello from react LifeCycle</h2>
                <button onClick={this.changeNumber}>Change Number</button>
                <LifecycleB count={this.state.count}/>
            </div>
        )
    }
}
