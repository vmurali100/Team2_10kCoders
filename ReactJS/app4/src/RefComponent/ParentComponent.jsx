import React, { Component } from 'react';
import ChildComp from './ChildComp';


export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
      this.ChildCompRef= React.createRef()
    
    }
    handleWelcome = ()=>{
        this.ChildCompRef.current.showWelcome();
    }
    

    render() {
        return (
            <div>
               
                <button onClick={this.handleWelcome}>Welcome</button>
                <hr />
                 <ChildComp ref={this.ChildCompRef}/> 
            </div>
              
        );
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        // this.inputRef.focus()
        console.log(this.ChildCompRef)
    }
}

