import axios from 'axios';
// export function getUserTokenAction(dispatch) {
//     console.log("from actions ")
//     return (dispatch) => {
//         var bodyFormData = new FormData();
//         bodyFormData.append("email", "nikhilchandrapoddar099@gmail.com");
//         bodyFormData.append("password", "nikhil");
//         axios({
//             method: "post",
//             url: "https://e-prathibha.com/apis/login",
//             data: bodyFormData,
//             headers: { "Content-Type": "multipart/form-data" }
//         })
//         .then((res) => {
//             console.log(res.data);
//             dispatch({
//                 type: "GET_USER_TOKEN",
//                 payload: res.data
//             })
//         })
//     }
// }
export function getUserTokenAction()
{
    return(dispatch) =>{
        axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true").then((res)=>{
            console.log(res.data)
            dispatch({
                type: "GET_USER_TOKEN",
                payload: res.data
            })
        })
    }
}