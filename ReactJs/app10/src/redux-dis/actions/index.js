import axios from "axios"
import { GET_ALL_DISTRICTS } from "./actiontypes";

export const getAllDistrictsAction=()=>{
    return async (dispatch)=>{
        let allDistricts = await axios.get("http://localhost:3000/districts")
        console.log(allDistricts.data);
        dispatch({
            type:GET_ALL_DISTRICTS,
            payLoad:allDistricts.data
        })
    }
}
// export const deleteDistrictAction=(dist)=>{
//     return async (dispatch)=>{
//         axios.delete("http://localhost:3000/districts/"+dist.id).then(()=>{
//             dispatch(getAllDistrictsAction())
//             console.log()
//         })
//     }
// }

// export const updateDistrictAction=()=>{

// }

export const addDtistrictAction=(dist)=>{
    return async (dispatch)=>{
        axios.post("http://localhost:3000/districts/",dist).then(()=>{
            dispatch(getAllDistrictsAction())
        })
    }
}