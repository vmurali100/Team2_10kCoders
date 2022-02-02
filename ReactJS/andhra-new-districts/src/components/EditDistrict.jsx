import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';




export const EditDistrict = () => {


  let { id } = useParams();
    const navigate = useNavigate();
    const handleButtonClick = () =>{
        navigate(-1)
    }
  return <div><button onClick={handleButtonClick}>Back</button></div>;
};
