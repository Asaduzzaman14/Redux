const { createStore } = require('redux');

// state
// despatch action
// reducer
//  store

const ADD_USER = "ADD_USER"

// state
const initialState = {
    users: ['asad'],
    count: 1
}

//  despatch action
const addUSER = (user) => {

    return {
        type: ADD_USER,
        paylode: user
    }
}



//  reducer

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_USER:
            return {
                users: [...state.users, action.paylode],
                count: state.count + 1
            }


        default:
            state
    }
}

// store
const store = createStore(userReducer)

store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(addUSER('hello'))
store.dispatch(addUSER('hi'))
