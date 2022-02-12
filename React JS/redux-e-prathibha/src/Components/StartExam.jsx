import React from 'react'
import { connect } from 'react-redux';

 const StartExam = (props) => {
  return (
    <div>
      <h1>start exams</h1>
      {/* <div>
        {examqtions != null
          ? exams.map((e) => {
              console.log(e);
              for (var a in e) {
                {
                  console.log(a);
                  return (
                    <>
                      <div className="container">
                        <div class="card" style={{ width: "250px" }}>
                          <div class="card-body">
                            <h5 class="card-title">{e.a}</h5>
                            <button
                              type="button"
                              onClick={() =>
                                endExamFunc(tokendata, () =>
                                  navigate("/endexam")
                                )
                              }
                              class="card-title"
                            >
                              {a}
                            </button>
                            <h5 class="card-title">{a}</h5>
                            <a class="card-link">Another link</a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }
              }
            })
          : ""}
      </div> */}
    </div>
  )
}

const mapStateToProps=(props)=>{

}

export default connect(mapStateToProps)(StartExam)