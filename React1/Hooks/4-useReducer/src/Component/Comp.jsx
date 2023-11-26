import { useReducer } from "react";
const initialState =0;
const reducer = (state, action)=>{
    switch(action){
        case "Increment": return state+1;
        case "Decrement": return state-1;
        default: return -1;
    }
}
function Comp(){
    const [count, dispatch]=useReducer(reducer, initialState);
    //The game is dispatch gives the infor what action he needs to take.
    return(<>
        <div >
            <button onClick={()=> dispatch("Increment")}>Increment</button>
            <h2>{count}</h2>
            <h2>************************</h2>
            <h2>{initialState}</h2>
            <button onClick={()=> dispatch("Decrement")}>Decrement</button>
        </div>
    </>)
}
export default Comp;