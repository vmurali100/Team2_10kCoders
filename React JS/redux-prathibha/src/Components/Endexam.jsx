import React from "react";
import { connect } from "react-redux";

const Endexam = (props) => {
  let { end } = props;
  console.log(end);
  return (
    <div>
      <div className="container" style={{height:"500px",marginTop:"150px"}}>
        <h5 style={{color:"blue",marginTop:"200px"}}>Thank You</h5>
        <h1 >{end != null ? end : ""}</h1>
      </div>

    </div>
  );
};

const MSTP = (state) => {
  return {
    end: state.end,
  };
};
export default connect(MSTP)(Endexam);