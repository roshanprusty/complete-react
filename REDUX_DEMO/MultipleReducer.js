const redux = require('redux');
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action
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

const initialCakeState = {
    numberOfCakes: 10
}
const initialIceCreamState = {
    numberOfIceCream: 18
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCream: state.numberOfIceCream - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer);
console.log('Initial state:', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe()

//********************************************************************************************************************************************* */
//In Action there is no mention of cake, so combine reducer got to know 
// You're right, and that's an important aspect of Redux's internal mechanics. In Redux, each action carries a `type` property that specifies what kind of action it is. This `type` property is what allows the root reducer to determine which individual reducer should handle the action. Let's take a closer look at how this works:

// In your code, you have two action creators: `buyCake()` and `buyIceCream()`. Each of these action creators returns an action object with a `type` property that represents the action's type. For example:

// ```javascript
// function buyCake() {
//     return {
//         type: BUY_CAKE,
//         info: 'First redux action'
//     };
// }

// function buyIceCream() {
//     return {
//         type: BUY_ICECREAM,
//         info: 'Second redux action'
//     };
// }
// ```

// Even though the action objects themselves don't explicitly mention "cake" or "ice cream," the `type` property serves as a unique identifier for each action type. When an action is dispatched using `store.dispatch()`, Redux uses the `type` property to determine which reducer should handle the action.

// In your root reducer, you've associated the `cakeReducer` with the action type `BUY_CAKE` and the `iceCreamReducer` with the action type `BUY_ICECREAM`:

// ```javascript
// const rootReducer = combineReducers({
//     cake: cakeReducer,
//     iceCream: iceCreamReducer
// });
// ```

// So, when you dispatch an action using `store.dispatch()`, Redux examines the `type` property of the action, and based on that type, it knows which individual reducer to call. If the action's type matches the one associated with a reducer, that reducer will be invoked to handle the action and update the corresponding slice of the state.

// In summary, Redux's action dispatching and reducer selection mechanism relies on the `type` property of actions. The naming of the actions or the slices of the state is not directly tied to the actual reducer selection process; it's the `type` property that guides Redux in determining which reducer to invoke.