import React, { useEffect, useState } from "react";
import axios from "axios";

function Fakestorefun() {
  const urlPro = "https://fakestoreapi.com/products";
  const urlCart = "https://fakestoreapi.com/carts";
  const urlUser = "https://fakestoreapi.com/users";

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(urlPro).then(({ data }) => {
      setProducts(data);
    });
    axios.get(urlCart).then(({ data }) => {
      setCarts(data);
    });
    axios.get(urlUser).then(({ data }) => {
      setUsers(data);
    });
  }, []);
return (
  <div className="col">
    <h2>Function FakeStore/Products</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>Product Image</th>
        </tr>
      </thead>
      <thead>
        {products.map((product) => {
          return <tr>{product.id < 10 && <td><img style={{height:"100px", width:"100px"}}src={product.image}/></td>}</tr>
        })}
      </thead>
    </table>
    <h2>Function FakeStore/carts</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>product purchase date</th>
        </tr>
      </thead>
      <thead>
        {carts.map((cart) => {
          return <tr>{cart.id < 10 && <td>{cart.date}</td>}</tr>
        })}
      </thead>
    </table>

    <h2>Function Placeholder/users</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>User email</th>
        </tr>
      </thead>
      <thead>
        {users.map((user) => {
          return <tr>{user.id < 10 && <td>{user.email}</td>}</tr>
        })}
      </thead>
    </table>
  </div>
);
      }
export default Fakestorefun;
