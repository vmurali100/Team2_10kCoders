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
    // var url = "https://e-prathibha.com/apis/register"
    // var data = formData
    // var headers = {"Content-Type": "multipart/form-data" }

    // axios.post(url,data,headers).then((res)=>{console.log(res.data)})
    // }
}

}


export const emailVerification = (logincode)=>{
    return async(dispatch)=>{
        await axios.post("https://e-prathibha.com/apis/verifyEmail",JSON.stringify(logincode)).then((res)=>{
            console.log("Posting Data",res.data)
            dispatch({type:"EMAILVERIFICATION",payload:res.data})
        })
    }
}
