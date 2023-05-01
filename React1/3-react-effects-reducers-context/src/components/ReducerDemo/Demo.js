import { useReducer } from 'react';
import './Demo.css';

function reducer(currState, action){
    // currState->currState will be assigned current value of state 
    // action->action will be assigned with the value which we passed as an argument in dispatcher.
    switch(action){
        case 'increment':
            return {count: currState.count+1};
        case 'decrement':
            return {count: currState.count-1};
        default :
            return currState;
    }
}
function Demo(){
    let[state, dispatcher] = useReducer(reducer, {count:0}); 
    function decrementHandler(){
        dispatcher('decrement');
    }
    function incrementHandler(){
        dispatcher('increment');
    }
    return(<>
        <div className="container">
            <button onClick={decrementHandler}> - </button>
            <span>{state.count}</span>
            <button onClick={incrementHandler}> + </button>
        </div>
    </>)
}
export default Demo;