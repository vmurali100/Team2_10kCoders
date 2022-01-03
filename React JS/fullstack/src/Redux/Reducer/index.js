export default function rootReducer(state, action) {
    switch (action.type) {
        case "GET_ALL_STUDENTS":
            return "Hello from All Students"

        case "GET_ALL_PRODUCTS":
            return "Hello from All Students"

        default:
            return "Hello"
    }
}