

## multi reducer 

const { createStore, combineReducers } = require('redux');


//  product constanants
const addProducts = 'addProducts';
const getProducts = 'getProducts';

//  card constanants
const addCards = 'addCard';
const getCards = 'getCard';

// product state
const initialState = {
    products: ["suger", "salt"],
    count: 2
}

// card state
const initialCardState = {
    cards: ["suger"],
    count: 1
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

//  card action
const getCard = () => {
    return {
        type: getCards
    }
}

const addCard = (card) => {
    return {
        type: addCards,
        paylode: card
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




// cartReducer

const cardReducer = (state = initialCardState, action) => {

    switch (action.type) {
        case getCards:
            return {
                ...state
            }

        case addCards:
            return {
                Cards: [...state.cards, action.paylode],
                count: state.count + 1
            }

        default:
            return state
    }
}

// reducer combain 

const rootReducer = combineReducers({
    productR: productsReducer,
    cardR: cardReducer
})


// store 
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProduct())
store.dispatch(addProduct("pen"))

store.dispatch(getCard())
store.dispatch(addCard("card"))