import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Start_Exam_Action } from '../Redux/actions';

export const Startexam = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));

    const startExamData = useSelector(state => state.startExam.data);
    useEffect(() => {
        dispatch(Start_Exam_Action(loginDetails, id))
        // if (startExamData)
        // {
        //     var alert = startExamData.alert;
        //     console.log(alert);
        //     if(alert)
        //     {
        //         window.alert(alert);
        //     }
        // }
    }, [])
    

    const handleFinishExam = () =>
    {
        if(startExamData)
        {
            var id = startExamData.data.exam[0].Exam.id
            navigate("/finish-exam/"+id);
        }
    }
    
    
   

    return (
        <div className="container">
            {startExamData && <h1>ExamId: {startExamData && startExamData.data.exam[0].Exam.id}</h1>}
            <button className="btn btn-primary" onClick={handleFinishExam}>Finish Exam</button>
            {
                startExamData !== undefined && startExamData  && startExamData.data.exam.map((e) => 
                {

                    for (var a in e) 
                    {
                        if( a === "Question")
                        {
                            for(var b in e[a])
                            {
                                if(b === "question")
                                {
                                    for( var c in e[a][b])
                                    {
                                        if(c === "above")
                                        {
                                            return <div dangerouslySetInnerHTML={{ __html: e[a][b][c] }}></div>
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            }
        </div>
    )
}
