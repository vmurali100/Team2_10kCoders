import axios from "axios";
import React, { Component } from "react";

class Fakestoreclass extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      carts: [],
      users: []
    };
  }

  render() {
    return (
      <div className="col">
      <h2>Class FakeStore/Products</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>Product Image</th>
        </tr>
      </thead>
      <thead>
        {this.state.products.map((product) => {
          return <tr>{product.id < 10 && <td><img style={{height:"100px", width:"100px"}}src={product.image}/></td>}</tr>
        })}
      </thead>
    </table>
    <h2>Class FakeStore/carts</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>product purchase date</th>
        </tr>
      </thead>
      <thead>
        {this.state.carts.map((cart) => {
          return <tr>{cart.id < 10 && <td>{cart.date}</td>}</tr>
        })}
      </thead>
    </table>

    <h2>Class Placeholder/users</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>User email</th>
        </tr>
      </thead>
      <thead>
        {this.state.users.map((user) => {
          return <tr>{user.id < 10 && <td>{user.email}</td>}</tr>
        })}
      </thead>
    </table> 
      </div>
    );
  }

  componentDidMount() {
    const urlPro = "https://fakestoreapi.com/products";
    axios.get(urlPro).then((res) => {
      var newState = { ...this.state };
      newState["products"] = res.data;
      this.setState(newState);
    });

    const urlCart = "https://fakestoreapi.com/carts";
    axios.get(urlCart).then((res) => {
      var newState = { ...this.state };
      newState["carts"] = res.data;
      this.setState(newState);
    });

    const urlUser = "https://fakestoreapi.com/users";
    axios.get(urlUser).then((res) => {
      var newState = { ...this.state };
      newState["users"] = res.data;
      this.setState(newState);
    });

  }
}
export default Fakestoreclass;
