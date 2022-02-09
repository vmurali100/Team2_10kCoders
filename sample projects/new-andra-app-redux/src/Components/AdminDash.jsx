import React from "react";
import { connect } from "react-redux";
import { DeleteAction, GetDistrictsListAction, GetUserListAction, HandleEditAction } from "../Actions";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminDash =(props)=>{
  const navigate = useNavigate()
 const {GetDistrictsListFunc , getUserListFunc , districtsList ,usersList ,handleEdit , deleteFunc} = props

 useEffect(()=>{
  GetDistrictsListFunc()
 },[])

    return (
      
        <div>
            {console.log(props)}
    
          <div className="container">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6">
                <button type="button" onClick={getUserListFunc}>Get Users List</button>
                <button
                  type="button"
                  onClick={()=>GetDistrictsListFunc()}
                  className="btn btn-primary"
                >
                  get districts list
                </button>
                {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                <h1>Districts LIST</h1>
                {districtsList != null ? (
                  
                  <table style={{ border: "2px solid", marginTop: "40px" }}>
                    
                    <thead>
                      <tr>
                        <th style={{ border: "2px solid" }}>S.No</th>
                        <th style={{ border: "2px solid" }}>DISTRICT</th>
                        <th style={{ border: "2px solid" }}>CONTUENCY</th>
                        <th colSpan={2} style={{ border: "2px solid" }}>
                          Manage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {districtsList.map((d, i) => {
                      return (
                        <tr style={{ border: "2px solid" }}>
                         
                          <td style={{ border: "2px solid" }}>{d.id}</td>
                          <td style={{ border: "2px solid" }}>{d.district}</td>
                          {d.constiuencies.map((e) => {
                            return (
                              
                               <tr>
                               <td key={e} style={{ paddingLeft: "10px" }}>
                                  <li style={{ textAlign: "left" }}>{e}</li>
                                </td>
                               </tr>
                              
                            );
                          })}
                          <td key={d.id} style={{ border: "2px solid" }}>
                            {" "}
                            <button
                              type="button"
                              onClick={() => handleEdit(d , ()=>navigate("edit"))}
                              className="btn btn-warning"
                            >
                              Edit
                            </button>{" "}
                            <button
                              type="button"
                              onClick={() => deleteFunc(d.id , ()=>navigate("#"))}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
              </div>
              <div className="col-3"></div>
            </div>
            <div className="row" style={{ marginTop: "40px" }}>
              <div className="col-4"></div>
              <div className="col-4">
                {" "}
                <button type="button">
                  <Link to="addnew">ADD NEW DIST</Link>
                </button>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
      );
    };

    const MSTP =(state)=>{
        return {
            districtsList :state ,
            usersList : state.usersList
        }
    }
const MDTP =(dispatch)=>{
    return{
       GetDistrictsListFunc : ()=>dispatch(GetDistrictsListAction()),
       getUserListFunc : ()=>dispatch(GetUserListAction()),
       handleEdit : (d , x)=>dispatch(HandleEditAction(d , x)),
       deleteFunc : (id , x)=>dispatch(DeleteAction(id , x))
    }
}
export default connect(MSTP ,MDTP)(AdminDash)