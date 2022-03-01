import axios from "axios"

export const Login_Verification_Action = (userInput) => {
    const bodyFormData = new FormData();
    const url = "https://e-prathibha.com/apis/login";
    bodyFormData.append("email", userInput.email);
    bodyFormData.append("password", userInput.password);

    console.log("bodyFromData", bodyFormData);
    return (dispatch) => {

        axios({
            method: "post",
            url: url,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then((res) => {
            if (res.data.status === 200) {
                localStorage.setItem("loginDetails", JSON.stringify(res.data.status));
            }
            dispatch({
                type: "Login_Verification",
                payload: { data: res.data }
            })
        }).catch((err) => {
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

    console.log("Register - bodyFromData", bodyFormData);
    return (dispatch) => {
        axios({
            method: "post",
            url: url,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then((res) => {
            console.log("action status", res.data.status);
            if (res.data.status === 200) {
                var code = res.data.data.slice(-7, -1);
                dispatch({
                    type: "Register_Verification",
                    payload: { data: { status: 200, data: code } }
                })
            }
            else {
                console.log("out of if condition")
                dispatch({
                    type: "Register_Verification",
                    payload: { data: res.data }
                })
            }



        }).catch((err) => {
            console.log("err", err.message);
        })
    }

}

export const Email_Verification_Action = (code) => {
    console.log("emailverification action :",code);
    const url = "https://e-prathibha.com/apis/verifyEmail";
    const body = { reg_code: code };
    return (dispatch) => {
        axios({
            method: "post",
            url: url,
            data: body,
            headers: { "Content-Type": "multipart/form-data" }
        }).then((res) => {
            dispatch({
                type: "Email_Verification",
                payload: { data: res.data }
            })
            console.log("Email verification action", res.data);
        }).catch((err) => {
            console.log("err", err.message);
        })
    }
}
