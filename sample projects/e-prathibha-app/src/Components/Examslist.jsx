import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StartExamAction } from "../Redux/Actions";

const Examslist =(props)=>{
    const navigate =useNavigate()
    var {examslist , tokendata , startExamFunc} = props;
    var examslist = examslist.exams
    console.log(examslist)
    return (
        <div>
            <center>welcome to Examslist component</center>
            <div className="container">
                <div className="row">
                <div className="col-2"></div>
                    <div className="col-8">
                        {console.log(examslist[0])}
                        {examslist != null ? examslist.map((e)=>{
                            //  for ( var i = 0 ; i < 3 ; i++){
                           for ( var f in e) {
                               if( f !== "total" && f !== "attempted"){
                                   {console.log(f)}
                                //    for ( var i = 0 ; i < 10 ; i++){
                                //   for (var h in f[0]){
                                //         if( h != "Package" && h != "cate" && h != "years"){
                                //             return <ul>
                                //                 <li>{h.id}</li>
                                //                 <li>{h.start_date}</li>
                                //                 <li>{h.end_date}</li>
                                //                 <li>{h.duration}</li>
                                //             </ul>
                                //         }
                                //     }
                                // }
                               return <>
                              
                                
                                    <div className="container">
                                    <div class="card" style={{width: "250px"}}>
                                 <div class="card-body">
                                   <h5 class="card-title">{f}</h5>
                                   <h6 class="card-subtitle mb-2 text-muted">Exam No :{f[0].id}</h6>
                                   <p class="card-text">{f[0].start_date}</p>
                                   <a  class="card-link" onClick={()=> startExamFunc(tokendata , ()=> navigate("startexam"))}>Start Exam</a>
                                   <a  class="card-link">Another link</a>
                                 </div>
                               </div></div>
                                
                             
                               </>
                               }
                           }
                        // }
                        }) : <center><h1>loading...........!</h1></center>}
                      {/* {examslist != null ?   <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> :  <center><h1>loading...........!</h1></center>} */}
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}

const MSTP =(state)=>{
     return {
         examslist : state[2] ,
         tokendata : state[0]
     }
}
const MDTP = (dispatch)=>{
  return {
    startExamFunc : (tokendata ,x)=>dispatch(StartExamAction(tokendata ,x))
  }
}
export default connect(MSTP ,MDTP)(Examslist)