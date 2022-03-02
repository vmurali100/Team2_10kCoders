import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { User_Data_Action } from '../Redux/actions'


export const Profile = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const userData = JSON.parse(localStorage.getItem("userDetails"));
  console.log("user-data profile comp: ", userData);

  const handleBackButton= () =>
  {
    navigate(-1)
  }
  return (
    <div className='container'>
      <div className='mb-3'><h1 className='alignCenter'>Profile</h1></div>
      <div className='row mb-3'>
        <div className='col'>
          <ul class="list-group">
            <li class="list-group-item ">Name</li>
            <li class="list-group-item ">Phone</li>
            <li class="list-group-item ">Email</li>
          </ul>
        </div>
        <div className='col'>
          {
            userData && <ul class="list-group">
            <li class="list-group-item ">{userData.name}</li>
            <li class="list-group-item ">{userData.phone}</li>
            <li class="list-group-item ">{userData.email}</li>
          </ul>
          }
        </div>
      </div>
      <div className="alignCenter">
        <button className='btn btn-primary' onClick={handleBackButton}>Back</button>
      </div>
    </div>
  )
}
