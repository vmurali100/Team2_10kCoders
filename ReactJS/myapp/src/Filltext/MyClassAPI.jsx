 import axios from 'axios'
import React, { Component } from 'react' 
  export default class Employee extends Component {
      constructor(props){
      super(props) 
      this.state ={
          employee : [] ,
          person  : [],
          name : []
      }
    }
    componentDidMount(){
       let URL = "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true      "
    axios.get(URL).then(({data})=>{
       let  newemployee = {...this.state}
       newemployee['employee'] = data ;
    this.setState(newemployee);
    })
    }
    render(){
        return <div>
            <h1>FILLTEXT -EMPLOYEE</h1>
            <ol>
                {this.state.employee.map((emp)=>{
                    return <li>{emp.email}</li>
                })}
            </ol>
        </div>
    }
  }
//   filltext person +++++++++++++++++++++++++++++++++++++++++++++
export  class Person extends Component {
    constructor(props){
    super(props) 
    this.state ={
        employee : [] ,
        person  : [],
        name : []
    }
  }
  componentDidMount(){
     let URL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
  axios.get(URL).then(({data})=>{
     let  newemployee = {...this.state}
     newemployee['person'] = data ;
  this.setState(newemployee);
  })
  }
  render(){
      return <div>
          <h1>FILLTEXT -PERSON</h1>
          <ol>
              {this.state.person.map((emp)=>{
                  return <li>{emp.address}</li>
              })}
          </ol>
      </div>
  }
}
// filltext name ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
export  class Name extends Component {
    constructor(props){
    super(props) 
    this.state ={
        employee : [] ,
        person  : [],
        name : []
    }
  }
  componentDidMount(){
     let URL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
  axios.get(URL).then(({data})=>{
     let  newemployee = {...this.state}
     newemployee['name'] = data ;
  this.setState(newemployee);
  })
  }
  render(){
      return <div>
          <h1>FILLTEXT -NAME</h1>
          <ol>
              {this.state.name.map((emp)=>{
                  return <li>{emp.fname}</li>
              })}
          </ol>
      </div>
  }
}