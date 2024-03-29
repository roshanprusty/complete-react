const redux = require('redux');
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'

//action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

 // (previousState, action) => newState
 const initialState = {
    numberOfCakes: 10
 }
 const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state, 
            numberOfCakes: state.numberOfCakes-1
        }
        default: return state
    }
 }
 
/* `const store = createStore(reducer);` is creating a Redux store. The `createStore` function is a
method provided by the Redux library that takes in a reducer function as an argument and returns a
Redux store object. The store object holds the complete state tree of the application and provides
methods to interact with the state, such as `dispatch` to dispatch actions and `getState` to
retrieve the current state. */
 const store = createStore(reducer);
 console.log('Initial state:', store.getState());
 const unsubscribe=store.subscribe(()=>console.log('Updated state', store.getState()));
 store.dispatch(buyCake());
 store.dispatch(buyCake());
 store.dispatch(buyCake());
 unsubscribe();