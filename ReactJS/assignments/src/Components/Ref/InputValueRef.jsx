import React,{Component} from "react";

export default class InputValueRef extends Component{
    constructor()
    {
        super();

        this.inputValueRef = React.createRef();
    }
    buttonHandler = ()=>
    {
        alert(this.inputValueRef.current.value);
    }
    render()
    {
        return (
            <div>
                <label>(CreateRef)Enter value and hit submit </label>
                <input type="text" ref={this.inputValueRef}/>
                <button onClick={this.buttonHandler}>Submit</button>
                
            </div>
        )
    } 
}