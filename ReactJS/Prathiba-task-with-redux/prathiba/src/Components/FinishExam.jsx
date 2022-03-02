import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Finish_Exam_Action } from '../Redux/actions';

export const FinishExam = () => 
{
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));
    useEffect(()=>{
        dispatch(Finish_Exam_Action(loginDetails,id));
        navigate("/exam-list");
    },[])
    return (
        <div>
            finish exam
        </div>
    )
}
