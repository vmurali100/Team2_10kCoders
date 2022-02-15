import React from "react";
import img from '../images/prathibha.png'

export const Home =()=>{
    return  <div>
        <center> <h2 style={{fontStyle:"italic",color:"blue",marginTop:"10px"}}>Welcome to E-Prathibha </h2></center>
        <div className="container-fluid" style={{margin : "50px auto"}}>
            <div className="row">
                <img src={img} alt=""  style={{width : "100%" , height : "600px"}}/>
            </div>
        </div>
    </div>
}