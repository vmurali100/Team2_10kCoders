import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StartExamAction } from "../Redux/Actions";

const Examslist = (props) => {
  const navigate = useNavigate();
  var { examslist, tokendata, startExamFunc } = props;
  var examslist = examslist.exams;
  console.log("ExamList Component",examslist);
  return (
    <div>
      <h3 style={{color:"blue",margin:"10px"}}>Welcome to Examslist Component</h3>
      <div className="container" >
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            {console.log(examslist[0])}
            {examslist != null ? (
              examslist.map((e) => {
                for (var f in e) {
                  if (f !== "total" && f !== "attempted") {
                    {
                      console.log(f);
                    }

                    return (
                      <>
                        <div className="container">
                          <div class="card" style={{ width: "250px" }}>
                            <div class="card-body">
                              <h5 class="card-title">{f}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">
                                Exam No :{f[0].id}
                              </h6>
                              <p class="card-text">{f[0].start_date}</p>
                              <button
                                class="card-link"
                                className="brn btn-primary m-2"
                                onClick={() =>
                                  startExamFunc(tokendata, () =>
                                    navigate("startexam")
                                  )
                                }
                              >
                                Start Exam
                              </button>
                              <a class="card-link">Another link</a>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  }
                }
              })
            ) : (
              <center>
                <h1>loading...........!</h1>
              </center>
            )}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

const MSTP = (state) => {
  return {
    examslist: state[2],
    tokendata: state[0],
  };
};
const MDTP = (dispatch) => {
  return {
    startExamFunc: (tokendata, x) => dispatch(StartExamAction(tokendata, x)),
  };
};
export default connect(MSTP, MDTP)(Examslist);