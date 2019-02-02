import { createStore, combineReducers } from 'redux'
import projectReducer from '../reducers/project'
import usersReducers from '../reducers/user'

const configureStore = () => {
    const store = createStore(combineReducers({
        projects: projectReducer,
        users: usersReducers
    }))
    return store
}

export default configureStore