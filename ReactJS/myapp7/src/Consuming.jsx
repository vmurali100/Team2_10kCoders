import React, { useEffect, useState } from "react";
import axios from "axios";

const Consume = () => {
  const [ek, setEk] = useState([]);
  useEffect(() => {
    let url =
      "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true";
    fetch(url).then((response) => {
     return response.json()
    }).then((e)=>{
      console.log(e)
      setEk(e)
    });
  },[]);
  return (
    <div>
      <ul>
        {ek.map((e) => {
          return <li key={e.id}>{e.email}</li>;
        })}
      </ul>
    </div>
  );
};
export default Consume;
