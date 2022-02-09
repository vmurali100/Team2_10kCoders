import React,{useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { getAllDistictsAction } from '../Redux/actions';

const Districts = ({districts,getAllDistricts}) => {
    console.log("Districts in main FGunction",districts);
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDistricts());
      }, []);

  return <div>
      <h2>This is District app</h2>
     {districts &&  <table className="table">
  <thead>
    <tr>
      <th scope="col"  style={{ border: "2px solid" }}>SL.No</th>
      <th scope="col"  style={{ border: "2px solid" }}>Districts</th>
      <th scope="col"  style={{ border: "2px solid" }}>Constituencies</th>
    </tr>
  </thead>
  <tbody>
    {districts.map((dist,i)=>{
        return(
            <tr key={i}>
                <td style={{ border: "2px solid" }}> {i+1}</td>
                <td style={{ border: "2px solid" }}>{dist.districtName} <button>EDIT</button></td>
                <td style={{ border: "2px solid" }}>{dist.constituencies.map((e)=>{
                    return <li key={e} style={{listStyleType:"none"}}>{e}</li>
                })}</td>
            </tr>
        )
    })}
  </tbody>
</table>}
  </div>;
  
};

const mapStateToProps = (state)=>{
   
    return {districts:state}
}

const mapDispatchToProps = ()=>{
    return {
       getAllDistricts:getAllDistictsAction
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Districts)
