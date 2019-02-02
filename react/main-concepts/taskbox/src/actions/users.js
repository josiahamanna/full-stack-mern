
// add users
export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        user
    }
}

// edit user
export const editUser = (user, id) => {
    return {
        type: 'EDIT_USER',
        user,
        id
    }
}

// remvoe user
export const removeUser = (id) => {
    return {
        type: 'REMOVE_USER',
        id
    }
}