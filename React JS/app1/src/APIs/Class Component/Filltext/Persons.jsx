import React, {Component} from 'react';
import axios from "axios"

export class Persons extends Component{
    constructor(){
        super()
        this.state={
            persons:[],
        }
    }
    render() {
        return <div>
            <h1>Fill Text <span style={{color:'blue'}}>"Persons"</span></h1>
            <ul>
                {this.state.persons.map((person)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Telephone :</span> {person.tel}</li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['persons']=res.data;
            this.setState(newState)
        })
    }
}
