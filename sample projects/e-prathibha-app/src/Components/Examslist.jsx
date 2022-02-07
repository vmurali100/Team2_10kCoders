import React from "react";
import { connect } from "react-redux";

const Examslist =(props)=>{
    var {examslist} = props;
    var examslist = examslist.examslist.exams
    console.log(examslist)
    return (
        <div>
            <center>welcome to Examslist component</center>
            <div className="container">
                <div className="row">
                <div className="col-2"></div>
                    <div className="col-8">
                        {examslist.map((e)=>{
                            return <div>
                               <div><h1>{e}</h1>
                               {e.map((f)=>{
                                    for (var a in f) {
                                        <li>{a}</li>
                                    }
                                })}</div>
                            </div>
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