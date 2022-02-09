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
             
              <div className="col">
                <button  className="btn btn-primary m-2"type="button" onClick={getUserListFunc}>Get Users List</button>
                <button
                  type="button"
                  onClick={()=>GetDistrictsListFunc()}
                  className="btn btn-primary"
                >
                  Get districts list
                </button>
                {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                <h1>Districts List</h1>
                {districtsList != null ? (
                  
                  <table class="table">
                    
                    <thead>
                      <tr>
                        <th >S.No</th>
                        <th >DISTRICT</th>
                        <th >CONSTITUENCY</th>
                        <th   >
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {districtsList.map((d, i) => {
                      return (
                        <tr style={{ border: "2px solid" }}>
                         
                          <td style={{ border: "2px solid" }}>{d.id}</td>
                          <td style={{ border: "2px solid" }} key={i}>{d.district}</td>
                          {d.constiuencies.map((e,i) => {
                            return (
                              
                               <tr>
                               <td key={e}>
                                  <ol key={i}style={{ width:"500px",textDecoration:"none" }}>{e}</ol>
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