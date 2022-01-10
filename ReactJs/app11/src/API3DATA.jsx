import React, { Component } from 'react'
import { connect } from "react-redux"
import { createUserAction } from './Reducer/action'

class API3DATA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                fname: "",
                lname: "",
            }
        }
    }
    handleChange = (e) => {
        let newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value
        this.setState({ user: newUser })
    }
    handleUser=()=>{
        this.props.createUser(this.state.user)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <form>
                    <label htmlFor='fname'>FNAME:</label>
                    <input type="text" value={this.state.fname} name='fname' 
                    onChange={(e) => {this.handleChange(e)}} /><br />

                    <label htmlFor='Lname'>LNAME:</label>
                    <input type="text" value={this.state.lname} name='lname'
                     onChange={(e) => {this.handleChange(e)}} /><br />

                    
                   
                    <button onClick={this.handleUser}>AddUser</button>
                </form>
                {this.props.user.map((std)=>{
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
    createUser:(user)=>{dispatch(createUserAction(user))}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(API3DATA)
