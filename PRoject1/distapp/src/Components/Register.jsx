import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    let navigate = useNavigate()

    const [user, setuser] = useState(
        {fname:"",lname:"",username:"",email:"",password:""}
    );

    const handleChange = (e)=>{
        let newUser = {...user}
        newUser[e.target.name] = e.target.value
        setuser(newUser)
    }

    const handleSubmit = ()=>{
        console.log(user);
        axios.post("http://localhost:3000/users",user).then(res=>{
            alert("Registration Successful")
            navigate("/login")
        })
    }
    return <div>
        <form>
            <div className="mb-3">
                <label className className="form-label">FirstName</label>
                <input type="text" className="form-control" name='fname' value={user.fname}
                 onChange={(e)=>{handleChange(e)}}
                />
            </div>

            <div className="mb-3">
                <label className className="form-label">LastName</label>
                <input type="text" className="form-control" name="lname" value={user.lname}
                 onChange={(e)=>{handleChange(e)}}
                />
            </div>

            <div className="mb-3">
                <label className className="form-label">UserName</label>
                <input type="text" className="form-control" name='username' value={user.username}
                    onChange={(e)=>{handleChange(e)}}
                    />
            </div>


            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control"  name="email" value={user.email} 
                 onChange={(e)=>{handleChange(e)}}
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={user.password} 
                    onChange={(e)=>{handleChange(e)}}
                />
            </div>

            <button type="button" className="btn btn-primary"  onClick={handleSubmit}>Submit</button>
        </form>
    </div>;
};
