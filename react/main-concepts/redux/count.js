const { createStore } = require('redux')

// Reducer is a function that is reponsible for maintaining the state and updates the state based on action.
reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + 1
            } 
        case 'DECREMENT' :
            return {
                count: state.count - 1
            }
        case 'RESET' :
            return {
                count: 0
            }
        default: 
            return state
    }
}

const store = createStore(reducer)

// gets called everytime the state changes
store.subscribe(()=>{
    console.log(store.getState())
})

function increment() {
    return {
        type: 'INCREMENT'
    }
}

function decrement() {
    return {
        type: 'DECREMENT'
    }
}

function reset(){
    return {
        type: 'RESET'
    }
}

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(increment())
store.dispatch(reset())