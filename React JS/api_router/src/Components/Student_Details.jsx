 import React, {useState,useEffect} from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';


export const Student_Details = () => {
    const [data, setData] = useState([]);
    let params = useParams();

    useEffect(() => {
        let allStudents = JSON.parse(localStorage.getItem('students'));
        var selectedStudents = allStudents.find(
            (std) => std.name == params.studentname
        );
        setData(selectedStudents)
    }, [])
    console.log("params", params);


    return <div>
        <h2 style={{ color: 'red' }}>10K Coders Student Details</h2>
        <ul>
            <li style={{color:'black',display:'border'}}>Student name : {data.name}</li><br />
            <li style={{color:'black',display:'border'}}>Student email : {data.email}</li>
        </ul>
    </div>;
};
