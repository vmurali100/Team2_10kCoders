import React from "react";
import { UserConsumer } from "./Context";

export const Child = () => {

//   console.log(ak);
  return (
    <div>
      <UserConsumer>
        {(value) => {
          console.log(value);
          return (
            <div>
              <h1>{value}</h1>
            </div>
          );
        }}
      </UserConsumer>
    </div>
  );
};
