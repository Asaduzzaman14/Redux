const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux")
const thunk = require('redux-thunk').default;

// constant 
const getTodosRequest = "getTodosRequest"
const getTodosSuccess = "getTodosSuccess"
const getTodosFaield = "getTodosFaield"



// action 

const GET_TODOS_REQUEST = () => {
    return {
        type: getTodosRequest
    }
};

const GET_TODOS_SUCCESS = (todos) => {
    return {
        type: getTodosSuccess,
        todos: todos,
    }
}
const GET_TODOS_FAIELD = (error) => {
    return {
        type: getTodosFaield,
        error: error,
    }
}

// state 
const todosInitialState = {
    todos: [],
    isLoading: false,
    error: null
}

// reducers

const todosReducer = (state = todosInitialState, action) => {

    switch (action.type) {
        case getTodosRequest:
            return {
                ...state,
                isLoading: true,
            }

        case getTodosSuccess:
            return {
                ...state,
                isLoading: false,
                payload: action.todos

            }
        case getTodosFaield:
            return {
                ...state,
                todos: [],
                error: action.error

            }



        default:
            return state
    }


}

// async action crator
const fetchTodos = () => {

    return (dispatch) => {
        dispatch(GET_TODOS_REQUEST());
        axios.get(todosUrl)
            .then(res => {
                // console.log(res.data);
                const todos = res.data;
                const title = todos.map(todos => todos.title)
                dispatch(GET_TODOS_SUCCESS(title))
            })
            .catch(err => {
                const error = err.message;
                dispatch(GET_TODOS_FAIELD(error))
            })
    };


}





// store  
const store = createStore(todosReducer, applyMiddleware(thunk))

// subscribe 
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch 

store.dispatch(fetchTodos())