import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { getAllDistrictsAction, deleteDistrictAction, addDtistrictAction, addConstituencyAction } from "../Actions/actions";


const DistrictDetails = ({
  districts,
  getAllDistricts,
  deleteDistrict,
  addDistrict,
  addContienciess
}) => {
  const [allDistricts, setdistricts] = useState([]);
  const [isAdd, setisAdd] = useState(false);
  const [isAddContiency, setisAddContiency] = useState(false);
  const [districtObj, setdistrictObj] = useState({
    constituencies: [],
    districtName: "",
    isAddCont: false,
  });
  const [addConstituencies, setaddConstituencies] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDistricts());
  }, []);

  useEffect(() => {
    setdistricts(districts);
  }, [districts]);



  const hanldeConstiency = (dist, i) => {
    let allDistricts = [...districts];
    let newDist = { ...dist };
    newDist.isAddCont = !newDist.isAddCont;
    allDistricts[i] = newDist;
    setdistricts(allDistricts);
    console.log(dist);
  };

  // const AddContiency=(dist)=>{
  //   console.log(dist);
  //   dist.constituencies.push(addConstituencies)

  // }

  const getConstiencies = (dist) => {
    return <div>
      <ul>
        {dist.constituencies.map((c, i) => {
          return <li key={i}>{c}</li>
        })}
      </ul>
      {dist.isAddCont && (
        <div className="contiency">
          <input type="text" onChange={(e) => { setaddConstituencies(e.target.value) }} value={addConstituencies} id="" />
          <button className="btn btn-primary m-2" onClick={() => {
            let add = [...addConstituencies];
            add.constituencies.push(addConstituencies)
            setaddConstituencies(add)
            dispatch(addContienciess(setaddConstituencies()));
            // dist.constituencies.push(addConstituencies)
            // setaddConstituencies(addConstituencies)
          }}>Add Constituency</button>
        </div>
      )}
    </div>
  }


  return (
    <div>
      <h2>Hello From Districts</h2>
      <div>
        <button
          onClick={() => {
            setisAdd(!isAdd);
          }}
        >
          Add District
        </button>
      </div>

      {!isAdd && allDistricts ? (
        // <ul>
        //   {allDistricts.map((dist, i) => (
        //     <div>
        //       <li key={i}>
        //         {dist.districtName} -{" "}
        //         <button
        // onClick={() => {
        //   dispatch(deleteDistrict(dist));
        // }}
        //         >
        //           Delete
        //         </button>
        //         <button

        //         >
        //           {" "}
        //           Edit{" "}
        //         </button>
        //       </li>

        //     </div>
        //   ))}
        // </ul>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">District Name</th>
              <th scope="col">Constiencies</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allDistricts.map((dist, i) => <tr key={i}>
              <td>
                {i + 1}
              </td>
              <td>
                {dist.districtName}
              </td>
              <td>
                {getConstiencies(dist)}
              </td>
              <td>
                <button className="btn btn-primary m-2" onClick={() => {
                  hanldeConstiency(dist, i);
                }}>Edit District</button>
                <button className="btn btn-danger m-2" onClick={() => {
                  dispatch(deleteDistrict(dist));
                }}>Delete District</button>
              </td>
            </tr>)}
          </tbody>
        </table>
      ) : (
        <div>
          <input
            type="text"
            value={districtObj.districtName}
            onChange={(e) => {
              let obj = { ...districtObj };
              obj.districtName = e.target.value;
              setdistrictObj(obj);
            }}
          />
          <button
            onClick={() => {
              dispatch(addDistrict(districtObj));
              setisAdd(!isAdd);
            }}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { districts: state };
};

const mapDispatchToProps = () => {
  return {
    getAllDistricts: getAllDistrictsAction,
    deleteDistrict: deleteDistrictAction,
    addDistrict: addDtistrictAction,
    addContienciess: addConstituencyAction
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DistrictDetails);