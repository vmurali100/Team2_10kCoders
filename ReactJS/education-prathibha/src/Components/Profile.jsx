import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const Profile = () => {

  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userDetails"));

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