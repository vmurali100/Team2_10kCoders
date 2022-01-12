import React, { Component } from "react"

export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                fname: ""
            },
            users: [],
            index: null
        }
    }


    handleAddUser = () => {
        let AllUsers = [...this.state.users]
        AllUsers.push(this.state.user)
        this.setState({ users: AllUsers })
        this.handleClear()
    }
    handleChange = (e) => {
        let newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value;
        this.setState({ user: newUser })
    }
    handleClear = () => {
        this.setState({
            user: {
                fname: ""
            }

        })
    }
    handleEditUser = (user, i) => {
        this.setState({ user, index: i })
    }
    handleUpdate = () => {
        let AllUsers = [...this.state.users];
        AllUsers[this.state.index] = this.state.user;
        this.setState({ users: AllUsers, index: null });
        this.handleClear()

    }
    handleDelete = (user) => {
        let AllUsers = [...this.state.users];
        this.setState({ users: AllUsers.filter((au) => au.fname !== user.fname) })
        this.handleClear()

    }
    render() {
        return (
            <div>
                <h3>
                    hello
                </h3>
                <form>
                    <label htmlFor="fname">firstname:</label>
                    <input type="text" name="fname" value={this.state.user.fname} onChange={(e) => { this.handleChange(e) }} />
                    {this.state.index
                        !== null ? (<button type="button" onClick={this.handleUpdate}>updateuser</button>)
                        : (<button type="button" onClick={this.handleAddUser}>adduser</button>)
                    }

                </form>
                <hr />
                {this.state.users.map((user, i) => {
                    return <p key={i}>
                        <span onClick={() => { this.handleEditUser(user, i) }} >{user.fname}</span>-<span onClick={() => { this.handleDelete(user) }}>{""}X{""}</span></p>
                })}
            </div>
        )
    }

}