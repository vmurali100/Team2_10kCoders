import React, { Component } from 'react';


 export default class InputRefComp extends Component {
          constructor(props) {
            super(props)
          
            //    this.inputRef = React.createRef()
            this.inputRef = null
            this.cbInputRef=(element)=>{
                this.inputRef =element
            }
          }
          
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <input type="text" ref={this.cbInputRef} />
            </div>
        );
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        // this.inputRef.focus()
    }
}

