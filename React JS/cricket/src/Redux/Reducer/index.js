
const defaultData = {
    users:[],
    students:['Hari','Giri','Ravi','Suri','Meghana'],
    products:[]
}
export default function rootReducer(state=defaultData, action) {
    switch (action.type) {
        case "GET_ALL_STUDENTS":
            return state.students;

        case "GET_ALL_PRODUCTS":
            return state.students;

        default:
            return state;
    }
}