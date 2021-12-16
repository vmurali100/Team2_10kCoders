import React, { useState } from "react";

export const Teja = () => {
  const [myName, setmyName] = useState("Teja");
  // Arguments to be Passed for A Hook
  // 1. What is the Variable name
  // 2. A function name which can change the varibale Value
  return <div>
      <button onClick={()=>{setmyName("Tejdeep")}}>Change Name</button>
      <h2>Hello From {myName} Component</h2>
  </div>;
};
