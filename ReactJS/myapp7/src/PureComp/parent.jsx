import React, { useState } from "react";
import Sample from "./sampe1";

const Parent = () => {
  const [name, setName] = useState("ajayvarma");

  const handleupdate = () => {
    let x = Math.ceil(Math.random() * 10);
    if (x <= 5) {
      setName("akhilvarma");
    } else if (x > 5) {
      setName("harishvarma");
    } else {
    }
  };
  return (
    <div>
      <Sample name={name} />
      {/* {name} */}
      <button
        onClick={() => {
          handleupdate();
        }}
      >
        <h1>hanlde</h1>
      </button>
    </div>
  );
};
export default Parent;
