const usersInitialState = []

const userReducers = (state = usersInitialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return state.concat(action.user)
        case 'EDIT_USER':
            return state.map(user => {
                if (user.id == action.id) {
                    return { ...state, ...action.user }
                } else {
                    return state
                }
            })
        case 'REMOVE_USER':
            return state.filter(user => user.id != action.id)
        default:
            return state
    }
}

export default userReducers