import { useState } from "react";
import Span from "./Span";

function Counter(){
    let[count, setCount]=useState(0);
    console.log("Counter Executed");
    return(<>
        <button onClick={() => setCount(count+1)}>+</button>
        <Span count={5}/>
        <button onClick={() => setCount(count-1)}>-</button>
        </>)
}
export default Counter; 