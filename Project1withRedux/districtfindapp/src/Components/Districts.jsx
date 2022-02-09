import React,{useEffect,useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteDistrictAction, getAllDistictsAction, updateDistrictAction } from '../Redux/actions';

const Districts = ({districts,getAllDistricts,deleteDistrict,updateDistrict}) => {
    const [distvals, setdistvals] = useState({districtName:"",constituencies:[],id:""});

    let navigate = useNavigate()
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDistricts());
      }, []);

      const handleEdit =(dist)=>{
        for(var a in dist){
          document.getElementById(a).value = dist[a]
        }
        setdistvals(dist)
      }
      const handleChange = (e)=>{
        var newval = {...distvals}
        if(e.target.name="constituencies"){
          newval[e.target.name]= document.getElementById("constituencies").value.split(",")
          setdistvals(newval)
        }
       if(e.target.name="districtName"){
          newval[e.target.name] =document.getElementById("districtName").value
          setdistvals(newval)
        }
        else{
          newval[e.target.name] = document.getElementById("Id").value
          setdistvals(newval)
        }
      }

  return <div>
      <h2>This is District app</h2>
     <div className="container">
       <div className="row" >
         <div className="col-8">
         {districts &&  <table className="table">
  <thead>
    <tr>
      <th scope="col"  style={{ border: "2px solid" }}>SL.No</th>
      <th scope="col"  style={{ border: "2px solid" }}>Districts</th>
      <th scope="col"  style={{ border: "2px solid" }}>Constituencies</th>
      <th scope="col"  style={{ border: "2px solid" }}>EDIT AND DELETE</th>
    </tr>
  </thead>
  <tbody>
    {districts.map((dist,i)=>{
        return(
            <tr key={i}>
                <td style={{ border: "2px solid" }}> {i+1}</td>
                <td style={{ border: "2px solid" }}>{dist.districtName} </td>
                <td style={{ border: "2px solid" }}>{dist.constituencies.map((e)=>{
                    return <li key={e} style={{listStyleType:"none"}}>{e} </li>
                })}</td>
                <td style={{ border: "2px solid" }}>
                  <li style={{listStyleType:"none"}}>
                    <button className='btn btn-warning' onClick={()=>{handleEdit(dist)}}>Edit</button>
                  <button className='btn btn-danger' onClick={()=>{dispatch(deleteDistrict(dist))}}>Delete</button>
                  </li> </td>
            </tr>
        )
    })}
  </tbody>
</table>}
         </div>
         <div className="col-3"> 
          <form>
          <div class="mb-3">
            <label >DistrictName</label>
            <input  className="form-control" id="districtName" onChange={(e)=>handleChange(e)} name='districtName' />
          </div>
          <div class="mb-3">
            <label >Constituencies</label>
            <input type="text" className="form-control" id='constituencies' onChange={(e)=>handleChange(e)}  name='constituencies'/>
          </div>
          <div class="mb-3">
            <label >Id</label>
            <input type="text" className="form-control" id='id' value={distvals.id} name='id'/>
          </div>
          <button type="button" class="btn btn-primary" onClick={()=>{dispatch(updateDistrict(distvals))}}>Update</button>
        </form>
        
         </div>
       </div>
     </div>
  </div>;
  
};

const mapStateToProps = (state)=>{
    return {districts:state}
}

const mapDispatchToProps = ()=>{
    return {
       getAllDistricts:getAllDistictsAction,
       deleteDistrict:deleteDistrictAction,
       updateDistrict:updateDistrictAction
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Districts)
