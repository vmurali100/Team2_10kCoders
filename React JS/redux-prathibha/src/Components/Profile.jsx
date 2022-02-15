import React from "react";
import { connect } from "react-redux";

const Profile = (props) => {
  var { profiledata } = props;

  console.log(props);
  return (
    <div>
      <h3 style={{color:"blue"}}>Welcome to profile component</h3>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            {
              <div style={{height:"500px"}}>
                {profiledata != null ? (
                  <>
                    {" "}
                    <img src={profiledata.img} alt="logo" />
                    <h5><span style={{color:"red"}}>Name:</span> {profiledata.name}</h5> 
                    <h5><span style={{color:"red"}}>E-mail:</span> {profiledata.email}</h5>
                    <h5><span style={{color:"red"}}>User Name:</span> {profiledata.name}</h5>
                    <h5><span style={{color:"red"}}>Phone Number:</span>{profiledata.phone}</h5>
                  </>
                ) : (
                  <div style={{ height: "400px" }}>
                    <h2 style={{ alignSelf: "center" }}>Loading.........!</h2>
                  </div>
                )}
                <br />
                <br />
                <br />
              </div>
            }{" "}
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};
const MSTP = (state) => {
  return {
    profiledata: state.profiledata,
  };
};
export default connect(MSTP)(Profile);