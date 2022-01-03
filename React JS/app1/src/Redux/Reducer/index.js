export default function rootReducer(state,action) {
    switch (action.type) {
        case "GET_ALL_STUDENTS":
            return "Hello From All Students";

        case "GET_ALL_PRODUCTS":
            return "Hello From All Products";

        default:
            return "Helllo"
    }
} 