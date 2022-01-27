import React, { useState } from 'react'
import axios from 'axios'

export const DistrictDetails = () => {
    const [userInput, setuserInput] = useState("")
    const[searchDist , setsearchDist] = useState({})

    const searchDistrict = ()=>{
        axios.get("http://localhost:3000/districts").then((res)=>{
                 let dist = res.data.find(d => d.constituencies.indexOf(userInput) > -1)
                 console.log(dist)
                 setsearchDist(dist)
        })
    }
    return (
        <div>
            <div className="container">
              <div className="row">
                  <div className="col">
                  <form>
                    <div class="mb-3">
                        <label class="form-label">Enter Assembly Constituency </label>
                        <input type="email" class="form-control" value={userInput} onChange={(e)=>{setuserInput(e.target.value)}} />

                    </div>
                    <button type="button" class="btn btn-primary" onClick={searchDistrict}>Find District</button>
                </form>
                  </div>
                 {searchDist.districtName && <div className="col">
                      <h2> Your New District is : {searchDist.districtName}</h2>
                  </div>}
              </div>
            </div>

        </div>
    )
}