import axios from "axios"

const commonfun = async(url)=>{
        await axios.get(url).then((res)=>{
            console.log("common fun",res.data)
            return res.data 
        })
}


export const dataAction = async()=>{
    var data = await commonfun("https://jsonplaceholder.typicode.com/users")
    console.log("Coomon Fun2",data)
    return async(dispatch)=>{
        await axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res.data)
            dispatch({type:"GET_DATA",payload:res.data})
        })
    }
}

export const getData2Action = ()=>{
    return async (dispatch)=>{
        await axios.get("https://jsonplaceholder.typicode.com/albums").then((res)=>{
            dispatch({type:"GET_DATA2",payload:res.data})

        })
    }
}