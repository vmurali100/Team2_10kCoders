import axios from "axios";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const [hdata, setHdata] = useState({})
  useEffect(() => {
    axios.get(" http://localhost:3000/home").then(({ data }) => {
      setHdata(data)
    })
  }, [])
  return <div>
    {console.log(hdata)}
    {/* <h2>Welcome To React Router</h2> */}
    <h2>{hdata.heading}</h2>
  </div>
};
