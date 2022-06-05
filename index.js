//defining variable
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';


//state
const initialCounterState = {
    count: 0

}
const initialUserState = {
    users: [{ name: 'asad' }]
};

// action creter - object type, paylode
const icrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

const decrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: "rakib" }
    }
}