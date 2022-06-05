const { createStore } = require('redux');

//defining variable
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
// const ADD_USER = 'ADD_USER';


//state
const initialCounterState = {
    count: 0

}

// const initialUserState = {
//     users: [{ name: 'asad' }]
// };

// action creter - object type, paylode
const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}

const counterReducer = (state = initialCounterState, action) => {

    switch (action.type) {

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }



        default:
            state
    }
}

// const addUser = () => {
//     return {
//         type: ADD_USER,
//         payload: { name: "rakib" }
//     }
// }

//  create reducer for counter





//  1. state
//  2. dispatch action
//  3 . reducer

//  4. store
// 4.1 getState(), dispatch(), subscribe()


// crete store

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log((store.getState()));
})

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
