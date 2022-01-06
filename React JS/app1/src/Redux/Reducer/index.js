
const defaultData = {
    users:[],
    students:['Harish','Rachana','Giri','Usha','Sohail'],
    products:['cloths','Dolls','chairs']
}
export default function rootReducer(state=defaultData,action) {
    switch (action.type) {
        case "GET_ALL_STUDENTS":
            return state.students;

        case "GET_ALL_PRODUCTS":
            return state.products;

        default:
            return state;
    }
} 