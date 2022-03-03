import axios from "axios"

export const Login_Verification_Action = (userInput) => 
{
    const bodyFormData = new FormData();
    const url = "https://e-prathibha.com/apis/login";
    bodyFormData.append("email", userInput.email);
    bodyFormData.append("password", userInput.password);

    return (dispatch) => {

        axios({
            method: "post",
            url: url,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then((res) => {
            if (res.data.status === 200) {
                localStorage.setItem("loginStatus", JSON.stringify(res.data.status));
                localStorage.setItem("loginDetails",JSON.stringify(res.data.data));
            }
            dispatch({
                type: "Login_Verification",
                payload: { data: res.data }
            })
        }).catch((err) => 
        {
            console.log("err", err.message);
        })
    }

}

export const Remove_Token_Action = () => {
    return {
        type: "Remove_Token"
    }
}

export const Register_Verification_Action = (userInput) => {
    const bodyFormData = new FormData();
    const url = "https://e-prathibha.com/apis/register";
    bodyFormData.append("email", userInput.email);
    bodyFormData.append("name", userInput.name);
    bodyFormData.append("password", userInput.password);
    bodyFormData.append("confirmPassword", userInput.cpassword);
    bodyFormData.append("phone", userInput.mobile);
    bodyFormData.append("photo", userInput.photo);

    return (dispatch) => {
        axios({
            method: "post",
            url: url,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then((res) => 
        {
                dispatch({
                    type: "Register_Verification",
                    payload: { data: res.data }
                })

        }).catch((err) => 
        {
            console.log("err", err.message);
        })
    }

}

export const Email_Verification_Action = (code) => 
{
    const url = "https://e-prathibha.com/apis/verifyEmail";
    const body = { reg_code: code };
    return (dispatch) => 
    {
        axios({
            method: "post",
            url: url,
            data: body,
            headers: { "Content-Type": 'application/json' }
        }).then((res) => 
        {
            if (res.data.status === 200) 
            {
                alert(res.data.data.message);
            }
            dispatch({
                type: "Email_Verification",
                payload: { data: res.data }
            })
        }).catch((err) => {
            console.log("err", err.message);
        })
    }
}


export const User_Data_Action = (userData) => 
{

    const url = "https://e-prathibha.com/apis/profile";
    const body = { id: userData.Id };
    const header = 
    {
        id : userData.Id,
        tokenu : userData.Token,
        server_key : "3w99V63pW7tJ7vavGXtCKo8cp"
    }
    return (dispatch) => 
    {
        axios({
            method: "post",
            url: url,
            data: body,
            headers: header
        }).then((res) => 
        {
            if (res.data.status === 200) 
            {
                localStorage.setItem("userDetails",JSON.stringify(res.data.data));
            }
            dispatch({
                type: "User_Data",
                payload: { data: res.data.data}
            })
        }).catch((err) => {
            console.log("err", err.message);
        })
    }
}


export const Exam_List_Action = (userData) => {
    console.log("UserData action",userData);

    const url = "https://e-prathibha.com/apis/test_free_exam";
    const header = 
    {
        id : userData.Id,
        tokenu : userData.Token,
        server_key : "3w99V63pW7tJ7vavGXtCKo8cp"
    }
    return (dispatch) => 
    {
        axios({
            method: "post",
            url: url,
            headers: header
        }).then((res) => 
        {
            dispatch({
                type: "Exam_List",
                payload: { data: res.data.data}
            })
        }).catch((err) => {
            console.log("err", err.message);
        })
    }
}

export const Start_Exam_Action = (userData,id) => 
{
    const url = "https://e-prathibha.com/apis/start_exam_new?examId="+id;
    const header = 
    {
        id : userData.Id,
        tokenu : userData.Token,
        server_key : "3w99V63pW7tJ7vavGXtCKo8cp"
    }
    return (dispatch) => 
    {
        axios({
            method: "post",
            url: url,
            headers: header
        }).then((res) => 
        {
            if (res.data.status === 200) 
            {
                var alert = res.data.alert;
                alert && window.alert(alert);
            }
            dispatch({
                type: "Start_Exam",
                payload: { data: res.data}
            })
        }).catch((err) => {
            console.log("err", err.message);
        })
    }
}

export const Finish_Exam_Action = (userData,id) => 
{
    const url = "https://e-prathibha.com/apis/finishExam";
    const body = {
        examId: id,
        qno : 1
    }
    const header = 
    {
        id : userData.Id,
        tokenu : userData.Token,
        server_key : "3w99V63pW7tJ7vavGXtCKo8cp"
    }
    return (dispatch) => 
    {
        axios({
            method: "post",
            url: url,
            data: body,
            headers: header
        }).then((res) => 
        {
            if (res.data.status === 200) 
            {
                alert(res.data.data);
                
            }
        }).catch((err) => {
            console.log("err", err.message);
        })
    }
}