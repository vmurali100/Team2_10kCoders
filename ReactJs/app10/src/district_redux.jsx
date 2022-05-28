import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addDtistrictAction, getAllDistrictsAction } from "./redux-dis/actions";


const Districts_redux = ({
  districts,
  getAllDistricts,
  addDistrict,
}) => {
  const [allDistricts, setdistricts] = useState([]);
  const [isAdd, setisAdd] = useState(false);
  const [districtObj, setdistrictObj] = useState({
    constituencies: [],
    districtName: "",
    isAddCont: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDistricts());
  }, []);

  useEffect(() => {
    setdistricts(districts);
  }, [districts]);

  
  const getConstiencies =(dist)=>{
    return <div>
      <ul>
      {dist.constituencies.map((c,i)=>{
        return <li key={i}>{c}</li>
      })}
    </ul>
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
      
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">District Name</th>
            <th scope="col">Constiencies</th>
          </tr>
        </thead>
        <tbody>
          {allDistricts.map((dist, i) => <tr key={i}>
            <td>
              {i+1}
            </td>
            <td>
            {dist.districtName}
            </td>
            <td>
              {getConstiencies(dist)}
            </td>
           
          </tr>) }
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
}

const mapStateToProps = (state) => {
  return { districts: state };
};

const mapDispatchToProps = () => {
  return {
    getAllDistricts: getAllDistrictsAction,
    addDistrict: addDtistrictAction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Districts_redux);