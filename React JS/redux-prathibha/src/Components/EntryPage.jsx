import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetExamsListAction, { ViewProfileAction } from "../Redux/Actions";

export const EntryPage = (props) => {
  const { tokendata, ViewProfileFunc, GetExamsListFunc } = props;

  const navigate = useNavigate();
  useEffect(() => {
    console.log(tokendata[0]);
    console.log(props);
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4"></div>
          <div className="col-4" style={{marginTop:"10px"}}>
            <button
            className="btb btn-primary"
              type="button"
              onClick={() =>
                ViewProfileFunc(tokendata[0], () => navigate("/profile"))
              }
            >
              Profile
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4" style={{height:"600px",marginTop:"40px"}}>
            <button
            className="btn btn-primary"
              type="button"
              onClick={() =>
                GetExamsListFunc(tokendata[0], () => navigate("/examslist"))
              }
            >
              GET EXMAS LIST
            </button>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

const MDTP = (dispatch) => {
  return {
    ViewProfileFunc: (tokendata, x) =>
      dispatch(ViewProfileAction(tokendata, x)),
    GetExamsListFunc: (tokendata, x) =>
      dispatch(GetExamsListAction(tokendata, x)),
  };
};
const MSTP = (state) => {
  return {
    tokendata: state,
  };
};
export default connect(MSTP, MDTP)(EntryPage);