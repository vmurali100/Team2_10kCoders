import axios from "axios"
export const registerAction = (registervals)=>{
    console.log("Action Part")
    return async(dispatch)=>{
        axios.post("https://e-prathiba.com/apis/register/",registervals).then(()=>{
            dispatch({type:"REGISTERED"})
        })
        
    }
    
}