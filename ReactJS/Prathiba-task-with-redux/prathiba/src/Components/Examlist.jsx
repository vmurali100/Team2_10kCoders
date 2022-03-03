import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Examlist = () => 
{
  const navigate = useNavigate();
  const examList = useSelector(state => state.examList.data)

  const handleExam = (id) => 
  {
    navigate("/start-exam/" + id);
  }

  return (
    <div className="container alignCenter" style={{ marginBottom: 50 + "px" }}>
      <h3>Free Exam List</h3>
      <hr />
      {
        examList && examList.exams.map((exam) => 
        {
          for (var a in exam) 
          {
            return (<>
                <h3>{a}</h3>
                {
                  exam[a].map((l) => 
                  {
                    return (
                      <div className='d-inline-flex'>
                        <p class="list-group-item " style={{ border: "none" }}><button className='btn btn-secondary btn-lg' onClick={() => { handleExam(l.Exam.id) }}>{l.Exam.name}</button></p>
                      </div>)
                  })
                }
                <hr />
              </>)

          }
        })
      }

    </div>
  )
}
