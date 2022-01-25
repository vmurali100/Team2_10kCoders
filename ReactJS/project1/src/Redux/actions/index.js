import axios from 'axios';
export function getUserTokenAction(email,password) {
    console.log("email...: ",email, "password...: ",password)
    return (dispatch) => {
        var bodyFormData = new FormData();
        bodyFormData.append("email",email);//"nikhilchandrapoddar099@gmail.com"
        bodyFormData.append("password",password );//"nikhil"
        axios({
            method: "post",
            url: "https://e-prathibha.com/apis/login",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        })
        .then((res) => {
            dispatch({
                type: "GET_USER_TOKEN",
                payload: res.data
            })
        }) 
    }
}
