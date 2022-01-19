import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then(({ data }) => {
      console.log(data);
      setUser(data);
    });
  }, []);
  return (
    <div>
      <h1>Welcome to home component </h1>
      {user.map((us) => {
        return <li>{us}</li>;
      })}
    </div>
  );
};
export default Home;
