
const defaultData ={
    users:[{ }],
};

const UsersReducer = (state=defaultData,action)=>{

    switch (action.type) {
        case "GET_DATA" : 
            return defaultData.users
                    
        default:
            return defaultData
    }
}

export default UsersReducer

