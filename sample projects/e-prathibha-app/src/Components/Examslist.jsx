import React from "react";
import { connect } from "react-redux";

const Examslist =(props)=>{
    var {examslist} = props;
    var examslist = examslist.examslist.exams
    return (
        <div>
            <center>welcome to Examslist component</center>
            <div className="container">
                <div className="row">
                <div className="col-2"></div>
                    <div className="col-8">
                        {examslist.map((e)=>{
                            
                        })}
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}

const MSTP =(state)=>{
     return {
         examslist : state
     }
}
export default connect(MSTP)(Examslist)