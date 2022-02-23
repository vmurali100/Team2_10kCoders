import axios from "axios"

export const Login_Verification_Action = (userInput) =>
{
    const bodyFormData = new FormData();
    const url = "https://e-prathibha.com/apis/login";
    bodyFormData.append("email",userInput.email);
    bodyFormData.append("password",userInput.password);

    console.log("bodyFromData", bodyFormData);
    return (dispatch) =>{

        axios({
            method:"post",
            url : url,
            data : bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then((res)=>{
            if(res.data.status === 200)
            {
                localStorage.setItem("loginDetails",JSON.stringify(res.data.data));
            }
            dispatch({
                type:"Login_Verification",
                payload:res.data
            })
        }).catch((err)=>{
            console.log("err",err.message);
        })
    }
    
}