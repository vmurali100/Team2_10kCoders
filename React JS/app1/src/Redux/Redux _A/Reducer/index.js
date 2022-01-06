const defaultData = {
    users: ['Hari', 'Ravi', 'Giri', 'Ramu', 'Somu']
}
const userReducer = (state = defaultData, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return defaultData.users;

        case 'DELETE_USERS':
            defaultData.users.pop()
            return defaultData.users

        default:
            return defaultData.users
    }
}

export default userReducer