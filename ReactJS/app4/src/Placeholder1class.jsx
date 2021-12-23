import axios from "axios";
import React, { Component } from "react";

class Placeholder1class extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  render() {
    return (
      <div className="col">
      <h2>Class Placeholder/comments</h2>
        <div className="table-responsive ms-5 me-5 m-auto">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">PostId</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            <tbody>
              {this.state.comments.map((comment) => {
                return (
                  <tr>
                  <td>{comment.postId}</td>
                  <td>{comment.name}</td>
                  <td>{comment.email}</td>
                  <td>{comment.body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const url = "http://jsonplaceholder.typicode.com/comments";
    axios.get(url).then((res) => {
      var newState = { ...this.state };
      newState["comments"] = res.data;
      this.setState(newState);
      //   this.setState(res.data);
      //   console.log(this.state);
    });
  }
}

export default Placeholder1class;
