import React, { useEffect }from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { GetExamsListAction, ViewProfileAction } from '../Actions';

const EntryPage = (props) => {
    const { tokendata, profileFunc, examListFunc } = props;
    const navigate = useNavigate();
    useEffect(() => {
        console.log(tokendata);
        console.log("Entry Page Data",props);
        
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <button
                        className='btb btn-warning'
                            type="button"
                            onClick={() =>
                                profileFunc(tokendata, () => navigate("/profile"))
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
                        className="btn btn-primary"
                            type="button"
                            onClick={() =>
                                examListFunc(tokendata, () => navigate("/examslist"))
                            }
                        >
                            GET EXMAS LIST
                        </button>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tokendata:state,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        examListFunc:(tokendata, x) =>
        dispatch(GetExamsListAction(tokendata, x)),

        profileFunc:(tokendata, x) =>
        dispatch(ViewProfileAction(tokendata, x))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EntryPage)