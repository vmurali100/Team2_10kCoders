import axios from 'axios';
import React,{ useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const LogIn = () => {
    let navigate = useNavigate()
    const [val, setval] = useState({email:"",password:""});
    


    const handleChange = (e)=>{
        let newval = {...val}
        newval[e.target.name] = e.target.value
        setval(newval)
    }

    const getUser = ()=>{
        return new Promise((resolve,reject)=>{
            axios.get("http://localhost:3000/users").then((res)=>{
                resolve(res.data)
            })
        
        })
    }
    const handleLogIn = async()=>{
       let user = await getUser()
       
            let loggedInUser = user.find((user1)=>val.email == user1.email && val.password == user1.password)
            if(loggedInUser){
               localStorage.setItem("LoggedInUserLocalStorage",JSON.stringify(val))
               alert("Your Details are Correct")
               navigate("/")
            }
            else{
                alert("Your details are wrong")
                navigate("/register")
                localStorage.setItem("LoggedInUserLocalStorage",null)
            }
       
       
    }
    return <div>
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    < form>
                        <div class="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" name='email'
                            value={val.email} onChange={(e)=>{handleChange(e)}}/>
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" name="password" value={val.password}
                            onChange={(e)=>{handleChange(e)}}/>
                        </div>
                        <button type="button" class="btn btn-primary" onClick={()=>{handleLogIn()}}>
                            LogIn</button>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    </div>;
};
