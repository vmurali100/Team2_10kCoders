import React, { Component } from 'react';
import { handle_date } from './redux/action';

class Date extends Component {
getdate = ()=>{
    this.props.dispatch(handle_date())
}
    render() {
        return <div>
            {this.props.Date.map((z)=>{
               return <h1 key={z.date}>{z.date}</h1>
            })}
        </div>
            
        
    }
}

function hi(state){
    return{
        Date:state.Date
    }
}

export default connect (hi)(Date);