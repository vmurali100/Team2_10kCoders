import React , { Component } from "react";

class Userform extends Component {
    constructor (props){
        super(props)
        this.state = {
           fname : '' ,
           lname : '' ,
           email : ''
        }
      
    }
    handleChange = (e)=>{
        var newuser = {...this.state}
          newuser[e.target.name] = e.target.value ;
          this.setState(newuser)
       }
       getdata = ()=>{
           console.log(this.state)
           
       }

    render(){
        return <div>
            <form >
                <label htmlFor="fname">FirstName</label>
                <input type="text" name="fname" value={this.state.fname} onChange={(e)=>this.handleChange(e)}/> <br />
                <label htmlFor="lname">LatName</label>
                <input type="text" name="lname" value={this.state.lname} onChange={(e)=>this.handleChange(e)}/> <br />
                <label htmlFor="fname">Email</label>
                <input type="email" name="email" value={this.state.email} onChange={(e)=>this.handleChange(e)}/> <br />
            </form>
            <button type="button" onClick={this.getdata}>get data</button>
            {/* {this.state.fname} */}
        </div>
    }
}
export default Userform