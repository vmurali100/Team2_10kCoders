import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUserAction, getUserAction } from './Redux/actions'

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: "",
            lname: "",
            email: ""
        }
    }
handleChange = (e)=>{
    let newUser = {...this.state.user}
    newUser[e.target.name] = e.target.value
    this.setState({user:newUser})
}
handleCreate=()=>{
    this.props.createUser(this.state.user)
    console.log("From Creator",this.props)
}


    render() {
       
        return (
            <div>
                <form>
                    <label htmlFor='fname'>FNAME:</label>
                    <input type="text" name="fname" value={this.state.fname}
                        onChange={(e) => { this.handleChange(e) } } /><br />

                    <label htmlFor='"lname'>LNAME:</label>
                    <input type="text" name="lname" value = {this.state.lname}
                       onChange={(e)=>{this.handleChange(e)}} /><br />
    
                    <label htmlFor='email'>Email:</label>
                    <input type = "email" name="email" value = {this.state.email}
                       onChange={(e)=>{this.handleChange(e)}} /><br />
                       <button type='button' onClick={this.handleCreate}>AddUser</button>
                </form>

                {this.props.user && this.props.user.map((std,i) => {
                    return <p key={std.fname}>{std.fname}</p>
                
                })}
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state
    }
}
function mapDispatchToProps(dispatch){
    return{
        createUser:(user)=>dispatch(createUserAction(user))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(User)
