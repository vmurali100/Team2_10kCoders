import { Component } from 'react';
import Greetings from './Greetings'

export class Post extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hi im Post Method Component"
        }
    }
    render() {
        return <div>
            <button onClick={()=>{this.setState({message:'Hello Post Component ... I Have Changed '})}}>Change Message</button>
            <Greetings
            msg={this.state.message}  />
          
        </div>
    }
}