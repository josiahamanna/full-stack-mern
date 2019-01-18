const { createStore } = require('redux')

const store = createStore((state = [], action) => {
    switch(action.type) {
        case 'ADD_USER' :
            return state.concat(action.user)
        case 'REMOVE_USER' :
            return state.filter(user => user.id != action.id)
        case 'EDIT_USER' :
            return state.map(user=>{
                // return Object.assign({}, user, action.user)
                if(user.id==action.id){
                    return {
                        ...user,
                        ...action.user
                    }
                } else {
                    return user
                }
            })
        default: 
            return state
    }
})

store.subscribe(()=>{
    console.log(store.getState())
})

function addUser(params) {
    return{
        type: 'ADD_USER',
        user: {
            id: params.id,
            name: params.name,
            email: params.email
        }
    }
}

function removeUser(id) {
    return{
        type: 'REMOVE_USER',
        id
    }
}

function editUser(id, user) {
    return {
        type: 'EDIT_USER',
        id,
        user
    }
}

store.dispatch(addUser({id: 1, name: 'ani', email: 'ani@gmail.ocm'}))
store.dispatch(addUser({id: 2, name: 'kishan', email: 'kishan@gmail.ocm'}))
store.dispatch(removeUser(2))
store.dispatch(editUser(1, {name: 'aniruddha'}))
