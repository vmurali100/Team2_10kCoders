import React, { Component } from 'react'
import FuncChild from './FuncChild'
// import { NormalComponent } from './NormalComponent'
import PureComp from './PureComp'

export default class ComponentsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello.. Normal Componnet .... How Are you ?",
             count:1
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({count:this.state.count+1})
        },2000)
    }
    
    render() {
        return (
            <div>
                <h2>Hello From Container Componet</h2>
                {/* <NormalComponent message={this.state.message} count={this.state.count}/> */}
                {/* <PureComp message={this.state.message}/> */}
                <FuncChild message={this.state.message}/>
            </div>
        )
    }
}
