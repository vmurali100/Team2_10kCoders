import axios,{useState} from "axios"


export const RegisterAction = (registervals)=>{
    console.log("RegisterVals",registervals)
    
    return ()=>{
        var formData = new FormData()
        formData.append("email",registervals.email)
        formData.append("name",registervals.name)
        formData.append("password",registervals.password)
        formData.append("phone",registervals.phone)
        formData.append("confirmPassword",registervals.confirmPassword)
     axios({
        
           method:"post",
           url: "https://e-prathibha.com/apis/register",
           data:formData,
           headers:{"Content-Type": "multipart/form-data" }
       }).then((res)=>{
           console.log(res.data)
       })
}

}


export const emailVerification = (logincode)=>{
    var data = JSON.stringify({"reg_code":logincode})
    return async(dispatch)=>{
        axios({
            method:"post",
            url:"https://e-prathibha.com/apis/verifyEmail",
            data:data,
            headers : {"Content-Type":"application/json"}
        }).then((res)=>{
            console.log("EMAIL VERIFICATION DATA",res.data)
            dispatch({type:"EMAILVERIFICATION",payload:res.data.data})
        })
    
    }
}

export const logInAction = (loginvals)=>{
    return async(dispatch) =>{
        var formData = new FormData()
        formData.append("email",loginvals.email)
        formData.append("password",loginvals.password)
        axios({
            method:"post",
            url:"https://e-prathibha.com/apis/login",
            data:formData,
            headers:{"Content-Type": "multipart/form-data" }
        }).then((res)=>{
            console.log("Data From LogIn Action",res.data)
            dispatch({type:"PROFILEDATA",payload:res.data.data})
        })
    }
}


export const userInfoAction = (profilevals)=>{
    console.log("Profile Values",profilevals)
    return async(dispatch)=>{
        var id1 = profilevals.Id
        var tokenu1 = profilevals.Token
        var body = { id : profilevals.Id}
        var url = "https://e-prathibha.com/apis/profile"
        console.log("HEader Vals",id1,tokenu1)
        await axios.post(url,body,{
            headers:{
                id:id1,
                tokenu:tokenu1,
                server_key:"3w99V63pW7tJ7vavGXtCKo8cp",
            }
        }).then((res)=>{
            console.log("Data From userInfoAction In Actions ",res.data)
            dispatch({type:"USERDETAILS",payload:res.data})
        })   
    }
}


export const getExamAction = (tokenvals)=>{
    console.log("State Data",tokenvals)
  return async()=>{
    var url = "https://e-prathibha.com/apis/test_free_exam";
    var body1 = {examId: 12,qno: 1 }
    var headers1 = {tokenu:tokenvals.Token,id: tokenvals.Id,server_key: "3w99V63pW7tJ7vavGXtCKo8cp"}
    await axios.post(
        url,
        { body: body1},
        { headers: headers1}
        ).then((res)=>{
        console.log(res.data)
    })
      
  } 
}


export const startExamAction = (tokenvals)=>{
    return async(dispatch)=>{
        var url = "https://e-prathibha.com/apis/start_exam_new?examId=12"
        await axios.post(
          url,
          {},
          {headers: {tokenu: tokenvals.Token,id: tokenvals.Id,server_key: "3w99V63pW7tJ7vavGXtCKo8cp",}}).
          then((res)=>{
            console.log(res.data)
        })
    }
}


export const finishExamAction = (tokenvals)=>{
    return async(dispatch)=>{
        var url = "https://e-prathibha.com/apis/finishExam"
        var body = {examId: 12,qno: 1 }
        axios.post(
            url,
            body,
            {headers:{tokenu: tokenvals.Token,id: tokenvals.Id,server_key: "3w99V63pW7tJ7vavGXtCKo8cp"}},    
        ).then((res)=>{console.log(res.data)})
    }
}