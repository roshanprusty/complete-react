const redux = require('redux');
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

 const initialState = {
    numberOfCakes: 10,
    numberOfIceCream: 15
 }

 const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state, 
            numberOfCakes: state.numberOfCakes-1
        }
        case BUY_ICECREAM: return {
            ...state, 
            numberOfIceCream: state.numberOfIceCream-1
        }
        default: return state
    }
 }
 
 const store = createStore(reducer);
 console.log('Initial state:', store.getState());
 const unsubscribe=store.subscribe(()=>console.log('Updated state', store.getState()));
 store.dispatch(buyCake());
 store.dispatch(buyCake());
 store.dispatch(buyIceCream());
 store.dispatch(buyCake());
 store.dispatch(buyIceCream());
 unsubscribe();