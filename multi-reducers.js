const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');


//  product constanants
const addProducts = 'addProducts';
const getProducts = 'getProducts';


// product state
const initialState = {
    products: ["suger", "salt"],
    count: 2
}


//  product action
const getProduct = () => {
    return {
        type: getProducts
    }
}

const addProduct = (product) => {
    return {
        type: addProducts,
        paylode: product
    }
}



// productt reducer
const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case getProducts:
            return {
                ...state
            }

        case addProducts:
            return {
                productss: [...state.products, action.paylode],
                count: state.count + 1
            }

        default:
            return state
    }
}





// store 
const store = createStore(productsReducer, applyMiddleware(logger));
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProduct())
store.dispatch(addProduct("pen"))
