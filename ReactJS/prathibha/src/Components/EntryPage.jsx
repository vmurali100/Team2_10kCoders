import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetExamsListAction, { ViewProfileAction } from "../Reducer/actions";

 const EntryPage = (props) => {
  const { tokendata, ViewProfileFunc, GetExamsListFunc } = props;

  const navigate = useNavigate();
  useEffect(() => {
    console.log(tokendata);
    console.log(props);
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4"></div>
          <div className="col-4">
            <button
              type="button"
              onClick={() =>
                ViewProfileFunc(tokendata, () => navigate("/profile"))
              }
            >
              Profile
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <button
              type="button"
              onClick={() =>
                GetExamsListFunc(tokendata, () => navigate("/examslist"))
              }
            >
              GET EXAMS LIST
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