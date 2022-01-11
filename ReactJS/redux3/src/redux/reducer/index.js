const defaultState = {
    users : ["Ervin", "Prabhu", "Arjun", "Karna"]
}

export default function rootReducer(state=defaultState, action)
{
    switch (action.type) {
        case "GET_ALL_USERS":
            return ["Ervin", "Prabhu", "Arjun", "Karna"];
    
        default:
            return [];
    }
}