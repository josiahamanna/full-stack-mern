const { createStore, combineReducers } = require('redux')

// categories

const categoryInitialStateDate = []
const categoriesReducers = (state=categoryInitialStateDate, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY': 
            return [...state, action.category]
        default: 
            return state
    }
}

// products
const productInitialStateDate = []
const productsReducer = (state=productInitialStateDate, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.product]
        default: 
            return state
    }
}


// once the dispatch is called all the reducers are going to be called
// So our case action.type should by unique across all the cases (no two reducers can have to same action.type values)
const store = createStore(combineReducers({
    categories: categoriesReducers,
    products:productsReducer
}))

console.log(store.getState().categories)

store.subscribe(()=>{
    console.log(store.getState())
})

function addProduct(product) {
    return {
        type: 'ADD_PRODUCT',
        product
    }
}

function addCategory(category) {
    return {
        type: 'ADD_CATEGORY',
        category
    }
}

store.dispatch(addProduct({id:1, name: 'scale', price:20}))
store.dispatch(addCategory({id:1, name:'electronic'}))