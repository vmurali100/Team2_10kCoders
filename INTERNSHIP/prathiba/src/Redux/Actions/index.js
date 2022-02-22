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
            console.log(res.data)
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
            dispatch({type:"PROFILEDATA",payload:res.data.data})
        })
    }
}

export const userInfoAction = (profilevals)=>{
    return (dispatch)=>{
        var headers = JSON.stringify([{server_key:"3w99V63pW7tJ7vavGXtCKo8cp"},{tokenu:profilevals.Token},{id:profilevals.Id},
        {"Content-Type":"application/json"}])
        console.log("HEader Vals",headers)
        axios({
            method:"post",
            url:"https://e-prathibha.com/apis/profile",
            headers:headers,
            body:{"id":"1975"}
        }).then((res)=>{
            console.log(res.data)
        })
    }
}

